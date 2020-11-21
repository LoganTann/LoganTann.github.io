
const app = new Vue({
  el: "#app",
  data: {
    introduction_step: 0,
    button_msg: ["Bonjour Logan !", "Très bien, c'est parti !", "Continuer"],
    entities: {
      bot: {
        name: "Logan",
        profile_pic: "https://cdn.discordapp.com/avatars/272777471311740929/38b1ea1854ab8feb4de04004fe01f99b.webp?size=64"
      },
      player: {
        name: "Canard-Man",
        profile_pic: "V-ro.png"
      }
    },

    modalContent: 0,
    choicesContent: {"Continuer": "next"},
    inputState: "nothing",
    sentText: 0,
    isBotTyping: true,
    bot_conversation: [
      {by: "bot", msg: "Salut 👋!"}
    ]
  },
  watch: {
    bot_conversation: function (val, oldVal) {
      this.autoscroll();
    }
  },
  computed: {
  },
  methods: {
    autoscroll() {
      this.$nextTick(function () {
        const history = document.querySelector("#tchat .history");
        if (! (history instanceof Element)) {
          throw "Error : Couldn't find history...";
        }
        if (typeof history.scroll == "function") {
          history.scroll({
            top: history.scrollHeight,
            left: 0,
            behavior: 'smooth'
          });
        } else {
          history.scrollTop = history.scrollHeight;
        }
      });
    },
    sendMessage() {
      const textarea = document.getElementById("userTextInput");
      if (!(textarea instanceof Element)) {
        throw "Did not found textarea";
      }
      this.sentText = textarea.value;
    },
    openModal(modalContent) {
      this.modalContent = marked(modalContent);
    },
    closeModal() {
      this.modalContent = 0;
    },
    async introduction_nextStep() {
      this.introduction_step++;
      if (this.introduction_step == 3) {
        await this.runLabel();
        alert("programme terminé !!!");
      }
    },

    //tchatbot commands
    async runLabel(labelName = "start") {
      if (! Array.isArray( script[labelName] )) {
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
        if (cmd == "end") {
          return "end";
        } else if (cmd == "next") {
          return "ok";
        } else if (! cmdRegex.test(cmd)) {
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
          console.log(result);
          return await this.evalCmd(result);
        } else {
          console.error(`object should be a choice`);
        }
      }
      return "ok";
    },

    async cmd_getText() {
      return new Promise(function(resolve, reject) {
        app.inputState = "waitingText";
        app.autoscroll();
        const inter = setInterval(function () {
          if (app.sentText !== 0) {
            // User sent a message
            app.bot_conversation.push({
              by: "player",
              msg: app.sentText.replace(/\n/g, "<br />")
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
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          app.bot_conversation.push({
            by: "bot",
            msg: marked(arg)
          });
          resolve();
        }, 1000);
      });
    },
    async cmd_choice(choiceObj) {
      return new Promise(function(resolve, reject) {
        app.inputState = "waitingChoice";
        app.autoscroll();
        app.choicesContent = choiceObj;

        const inter = setInterval(function () {
          if (app.sentText !== 0) {
            // User sent a message
            app.bot_conversation.push({
              by: "player",
              msg: app.sentText
            });
            app.inputState = "nothing";
            const retval = choiceObj[app.sentText];
            console.log(choiceObj, choiceObj[app.sentText], app.sentText)

            app.sentText = 0;
            clearInterval(inter);
            resolve(retval);
          }
        }, 100);
      });
    },
    async cmd_modal(arg) {
        return new Promise(function(resolve, reject) {
          app.inputState = "waitingContinue";
          app.autoscroll();
          app.bot_conversation.push({
            by: "bot",
            opensModal: true,
            msg: marked(modals[arg])
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
    }
  },
  created() {

  }
});
