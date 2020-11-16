const app = new Vue({
  el: "#app",
  data: {
    introduction_step: 0,
    button_msg: ["Bonjour Logan !", "Très bien, c'est parti !", "Continuer"],
    player_name: "Canard-Man"
  },
  computed: {
  },
  methods: {
    introduction_nextStep() {
      this.introduction_step++;
    }
  }
});
