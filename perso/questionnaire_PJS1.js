
const script = {};
const GET_TEXT = "get text"; // just to add the color
script["start"] = [
  "Tout d'abord, rien qu'en lisant la présentation de notre sujet, que savez-vous dessus.<br> Quels sont vos \"à-priori\" sur ce sujet ?",
  GET_TEXT, // wainting text
  "Il est fort probable que vous ayez parlé de télétravail, de confinement, et de cours à distance.",
  `C'est en fait la première idée reçue sur ce sujet, et ce n'est pas vraiment ce que l'on cherche à traiter dans notre exposé.

Ce que nous souhaitons démontrer, ce n'est pas que le numérique puisse remplacer l'éducation, mais plutôt rendre les cours plus efficaces ou plus intéressants en se servant des outils numériques.
Nous pensons que bien entendu, cette pratique doit être encadrée par un enseignant compétant.`,
  {
    "choice": "êtes-vous : ",
    "Un élève désolarisé, ou qui fait cours à distance cette année (hors contexte de confinement) ?": "next",
    "Un élève au Collège": "next",
    "Un élève au Lycée": "next",
    "Un étudiant": "Appliquer notre sujet dans les classes supérieures reste possible, mais un poil plus difficile comparé au collège ou au lycée.",
    "Un prof": "jump profs",
    "Un parent d'élève ou autre ?": "si autre",
  }, // waiting choice
  "modal id" // modal_opened ??
  "jump label"
];

script["label"] = [

];

const app = new Vue({
  el: "#app",
  data: {
    introduction_step: 0,
    button_msg: ["Bonjour Logan !", "Très bien, c'est parti !", "Continuer"],
    player_name: "Canard-Man",
    bot_conversation: [
      {}
    ]
  },
  computed: {
  },
  methods: {
    introduction_nextStep() {
      this.introduction_step++;
    },

    //tchatbot commands
    async runLabel(labelName = "start") {
      if (! Array.isArray( script[labelName] )) {
        throw `Label ${labelName} don't exist`;
      }

      for (let [key, val] of script[labelName]) {
        try {
          this.evalCmd(val);
        } catch (e) {
          console.error(`Label ${labelName}, instruction ${key} : ${e}`);
        }
      }
    },
    async evalCmd(cmd) {
      if (typeof cmd === "string") {
        const cmdRegex = /(\w+)\s+(.+)/gm;
        if (! cmdRegex.test(cmd)) {
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
            await this.runLabel(command_argument);
            break;
          case "next":
            break;
          case "end":
            return "stopped";
          default:
            await this.cmd_say(command_argument);
            break;
        }
      } else if (typeof cmd === "object") {
        if (typeof cmd.choice === "string") {
          const result = await this.cmd_choice(cmd);
          this.evalCmd(result);
        } else {
          console.error(`object should be a choice`);
        }
      }
      return "ok";
    },
    async cmd_getText() {
      const reply = window.prompt("Entrée attendue : ");
      console.log("cmd_getText: ", reply);
      return true;
    },
    async cmd_say(arg) {
      console.log(arg);
      return true;
    },
    async cmd_choice(choiceObj) {
      for (let question in choiceObj) {
        if (question == "choice") {
          alert(choice[question]);
          continue;
        }
        if (window.confirm(question)) {
          return choice[question];
        }
      }
      return "end";
    },
    async cmd_modal(arg) {
      console.log("cmd_modal: ", modals[arg]);
      return true;
    }
  }
});
