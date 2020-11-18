
const script = {};
const GET_TEXT = "get text"; // just to add the color

script["start"] = [
  "Tout d'abord, rien qu'en lisant la présentation de notre sujet, que savez-vous dessus.<br> Quels sont vos \"à-priori\" sur ce sujet ?",
  GET_TEXT, // wainting text
  "Il est fort probable que vous ayez parlé de télétravail, de confinement, et de cours à distance.",
  `C'est en fait la première idée reçue sur ce sujet, et ce n'est pas vraiment ce que l'on cherche à traiter dans notre exposé.

Ce que nous souhaitons démontrer, ce n'est pas que le numérique puisse remplacer l'éducation, mais plutôt rendre les cours plus efficaces ou plus intéressants en se servant des outils numériques.
Nous pensons que bien entendu, cette pratique doit être encadrée par un enseignant compétant.`,
  "modal explication_Apriori", // modal_opened ??
  {
    "choice": "êtes-vous : ",
    "Un élève désolarisé, ou qui fait cours à distance cette année (hors contexte de confinement) ?": "next",
    "Un élève au Collège": "next",
    "Un élève au Lycée": "next",
    "Un étudiant": "Appliquer notre sujet dans les classes supérieures reste possible, mais un poil plus difficile comparé au collège ou au lycée.",
    "Un prof": "jump profs",
    "Un parent d'élève ou autre ?": "jump autre",
  }, // waiting choice
  "jump label"
];

script["profs"] = [
  "Vous êtes dans la partie profs",
  "coucou !!!"
];

script["autre"] = [
  "Vous êtes dans la partie autre",
  "coucou !!!"
];

script["label"]  = [
  "vous avez atteint la fin ! salut ! ",
  "hyeay heay"
]

modals = {};
modals["explication_Apriori"] = `
Il est fort probable que vous ayez parlé de télétravail, de confinement, et de cours à distance.

C'est en fait la **première idée reçue sur ce sujet**, et ce n'est pas vraiment ce que l'on cherche à traiter dans notre exposé.

Ce que nous souhaitons démontrer, ce n'est pas que le numérique puisse remplacer l'éducation, mais plutôt rendre les cours **plus efficaces ou plus intéressants en se servant des outils numériques**.
Nous pensons que bien entendu, cette pratique doit être encadrée par un enseignant compétant.

En fait, avec les nouvelles réformes, nous pouvons déjà voir des tentatives d'applications numériques en classe au collège et au lycée :
* Utilisation d'un espace numérique de travail et apprentissage des bases de l'informatique
* Visualisation de courbes d'équations en maths

Certains profs peuvent innover. Vous avez sûrement dû voir ces idées-là :
* Quizz typique d'une émission télévisée projeté, où les élèves en groupe répondent depuis leurs téléphone afin de les faire réviser
* Stimulations d'expériences ou PowerPoint très interactifs pour les cours
* QCM en temps réel avec des QR-Codes
* Travail de groupe avec des outils de collaboration en temps réel (google docs, etherpad, codeshare...)
* Utilisation des séries pour faire réviser les langues
* Interrogations avec des questions dans un contenu ou disposées dans un ordre aléatoire, et corrigées de manière semi-automatique.


Le confinement, même si on en a surtout tiré du mal, a permis l'émergence de nouvelles méthodes :
* Les cours à la télé via la maison lumni. D'ailleurs, diffuser des extraits de reportages ou de séries permettent bien souvent de dynamiser un cours pour faire des débats en philosophie.
* Utilisation de logiciels de messagerie et de visio conférences pour faire des débats mieux argumentés, ou pour faire passer des extraits ou des références numériques.
* Toujours dans la messagerie, mais plus dans l'aspect du support : parler par le texte permets une certaine liberté sur les mots, et donc aussi de se sentir plus proche avec ses élèves, sans compter une plus grande flexibilité dans les horaires ou dans l'organisation. Cela permet aussi de motiver certains élèves qui sont plus discrets à l'oral, ou bien le fait de pouvoir envoyer ses réponses par le tchat améliore la participation. On n'a plus vraiment peur de se couper la parole aussi.

`;
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
    inputState: "nothing",
    sentText: 0,
    bot_conversation: [
      {by: "bot", msg: "Salut 👋!"}
    ]
  },
  computed: {
  },
  methods: {
    sendMessage() {
      const textarea = document.getElementById("userTextInput");
      if (!(textarea instanceof Element)) {
        throw "Did not found textarea";
      }
      this.sentText = textarea.value;
    },
    introduction_nextStep() {
      this.introduction_step++;
      if (this.introduction_step == 3) {
        console.log(this.runLabel());
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
          return "stop";
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
            return await this.runLabel(command_argument);
            break;
          default:
            await this.cmd_say(cmd);
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
      return new Promise(function(resolve, reject) {
        app.inputState = "waitingText";
        const inter = setInterval(function () {
          if (app.sentText !== 0) {
            // User sent a message
            app.bot_conversation.push({
              by: "player",
              msg: marked(app.sentText)
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
      for (let question in choiceObj) {
        if (question == "choice") {
          alert(choiceObj[question]);
          continue;
        }
        if (window.confirm(question)) {
          return choiceObj[question];
        }
      }
      return "end";
    },
    async cmd_modal(arg) {
        return new Promise(function(resolve, reject) {
          app.inputState = "waitingContinue";
          app.bot_conversation.push({
            by: "bot",
            opensModal: true,
            msg: marked(arg)
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
