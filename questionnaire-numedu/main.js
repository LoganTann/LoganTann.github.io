
const app = new Vue({
  el: "#app",
  data: {
    introduction_step: 0,
    button_msg: ["Bonjour Logan !", "Très bien, c'est parti !", "Continuer"],
    entities: {
      bot: {
        name: "Logan",
        profile_pic:
          "https://cdn.discordapp.com/avatars/272777471311740929/6d422b2eb1fdc74fd6f00319366ddff1.png?size=64",
      },
      player: {
        name: "Canard-Man",
        profile_pic: "../res/V-ro.png",
      },
    },

    modalContent: 0,
    choicesContent: { Continuer: "next" },
    inputState: "nothing",
    sentText: 0,
    isBotTyping: true,
    bot_conversation: [{ by: "bot", msg: "<h3>Salut 👋!</h3>" }],
  },
  watch: {
    bot_conversation: function (val, oldVal) {
      this.autoscroll();
      localStorage.setItem("form_tchat_history", JSON.stringify(val, null, 2));
    },
  },
  computed: {
    submitValue() {
      return JSON.stringify(this.bot_conversation, null, 2);
    },
  },
  methods: {
    autoscroll() {
      this.$nextTick(function () {
        const history = document.querySelector("#tchat .history");
        if (!(history instanceof Element)) {
          throw "Error : Couldn't find history...";
        }
        if (typeof history.scroll == "function") {
          history.scroll({
            top: history.scrollHeight,
            left: 0,
            behavior: "smooth",
          });
        } else {
          history.scrollTop = history.scrollHeight;
        }
      });
    },
    confirmAbortAndSave() {
      if (
        confirm(
          "Ouvrir le bouton d'envoi ne vous permettra pas de discuter davantage.\n Êtes vous sûr ?"
        )
      ) {
        this.inputState = "ended";
      }
    },
    resetConversation() {
      if (
        confirm(
          "Toute votre progression sera supprimée. Vous pourrez ensuite recommencer le formulaire.\n Êtes vous sûr ?"
        )
      ) {
        localStorage.removeItem("form_tchat_history");

        window.location.reload();
      }
    },
    sendMessage() {
      const textarea = document.getElementById("userTextInput");
      if (!(textarea instanceof Element)) {
        throw "Did not found textarea";
      }
      this.sentText = textarea.value;
    },
    openModal(modalContent) {
      this.modalContent = marked.parse(modalContent);
    },
    closeModal() {
      this.modalContent = 0;
    },
    async introduction_nextStep() {
      this.introduction_step++;
      if (this.introduction_step == 3) {
        if (localStorage.getItem("form_tchat_history")) {
          this.openModal(
            marked.parse(
              [
                "## Ce n'est pas la première fois que vous venez (?)",
                "Bonjour, nous avons détecté que vous avez déjà fait ce formulaire. Vous pouvez donc venir pour les raisons suivantes : ",
                "* Vous avez quitté la page sans le faire exprès et vous voulez reprendre votre progression.",
                "* Vous avez terminé le formulaire, et il y a eu une erreur lors de l'envoi des données",
                "* Vous désirez recommencer le formulaire",
                "",
                "En fermant ce message, vous aurez accès à votre ancienne conversation, mais il ne sera plus possible de la continuer.  ",
                "Un bouton pour recommencer est disponible, mais si jamais vous auriez la flemme de recommencer, vous pouvez tout de même nous envoyer la conversation non terminée via le bouton dédié.",
                "",
                "Si vous vous êtes arrêtés en cours de route, vous allez devoir copier vos données et les recoller une par une.",
                "",
                "Si vous venez en raison d'une erreur d'envoi, copiez la conversation, et envoyez-la par mail à logane.tann@etu.u-paris.fr",
              ].join("\n")
            )
          );
          this.bot_conversation = JSON.parse(
            localStorage.getItem("form_tchat_history")
          );
          this.inputState = "ended";
        } else {
          await this.runLabel();
        }
      }
    },
    escapeUserEntry(string) {
      return string
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
        .replace(/\n/g, "<br />");
    },

    //tchatbot commands
    async runLabel(labelName = "start") {
      if (!Array.isArray(script[labelName])) {
        throw `Label ${labelName} don't exist`;
      }
      for (let key in script[labelName]) {
        const val = script[labelName][key];
        try {
          const reply = await this.evalCmd(val);
          if (reply == "end") {
            return "end";
          }
        } catch (e) {
          console.error(`Label ${labelName}, instruction ${key} : ${e}`);
        }
      }
      return "ok";
    },
    async evalCmd(cmd) {
      if (typeof cmd === "string") {
        const cmdRegex = /(\w+)\s+(.+)/m;
        if (cmd == "end" || app.inputState == "ended") {
          if (app.inputState != "ended") {
            app.inputState = "ended";
          }
          return "end";
        } else if (cmd == "next") {
          return "ok";
        } else if (!cmdRegex.test(cmd)) {
          throw "Error : The string should respect the format (command) (... arguments)";
        }
        const [string, command_name, command_argument] = cmdRegex.exec(cmd);
        switch (command_name) {
          case "get":
            await this.cmd_getText();
            break;
          case "modal":
            await this.cmd_modal(command_argument);
            break;
          case "jump":
            const jmpRetval = await this.runLabel(command_argument);
            return jmpRetval;
            break;
          default:
            await this.cmd_say(cmd);
            break;
        }
      } else if (typeof cmd === "object") {
        if (typeof cmd.choice === "string") {
          const result = await this.cmd_choice(cmd);
          return await this.evalCmd(result);
        } else {
          console.error(`object should be a choice`);
        }
      }
      return "ok";
    },

    async cmd_getText() {
      return new Promise(function (resolve, reject) {
        app.inputState = "waitingText";
        app.autoscroll();
        const inter = setInterval(function () {
          if (app.sentText !== 0) {
            // User sent a message
            app.bot_conversation.push({
              by: "player",
              msg: app.escapeUserEntry(app.sentText),
            });
            app.inputState = "nothing";
            app.sentText = 0;
            clearInterval(inter);
            resolve();
          }
        }, 100);
      });
    },
    async cmd_say(arg) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          app.bot_conversation.push({
            by: "bot",
            msg: marked.parse(arg),
          });
          resolve();
        }, 1000);
      });
    },
    async cmd_choice(choiceObj) {
      return new Promise(function (resolve, reject) {
        app.inputState = "waitingChoice";
        app.autoscroll();
        app.choicesContent = choiceObj;

        const inter = setInterval(function () {
          if (app.sentText !== 0) {
            // User sent a message
            app.bot_conversation.push({
              by: "bot",
              msg: choiceObj.choice,
            });
            app.bot_conversation.push({
              by: "player",
              msg: app.sentText,
            });
            app.inputState = "nothing";
            const retval = choiceObj[app.sentText];
            console.log(choiceObj, choiceObj[app.sentText], app.sentText);

            app.sentText = 0;
            clearInterval(inter);
            resolve(retval);
          }
        }, 100);
      });
    },
    async cmd_modal(arg) {
      return new Promise(function (resolve, reject) {
        app.inputState = "waitingContinue";
        app.autoscroll();
        app.bot_conversation.push({
          by: "bot",
          opensModal: true,
          msg: marked.parse(modals[arg]),
        });
        const inter = setInterval(function () {
          if (app.sentText !== 0) {
            app.inputState = "nothing";
            app.sentText = 0;
            clearInterval(inter);
            resolve();
          }
        }, 100);
      });
    },
  },
  created() {},
});
