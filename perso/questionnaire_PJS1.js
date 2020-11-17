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
    }
  }
});
const script = {};

script["start"] = [
  "bot blablabla", // speaking
  "get text", // wainting text
  "choice choice_id", // waiting choice
  "modal id" // modal_opened ??
  "jump label"
]
