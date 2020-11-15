// HELPERS

function get1stMondayDate(offset = 0) {
  var date = new Date;
  date.setDate(date.getDate() + 1 - date.getDay() + offset * 7);
  return date;
}


function dateToString(date, mode = "d M Y") { // Works like the php function date.parse
  let retval = "";
  const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
  const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
  for (letter of mode) {
    if (letter == "d") { // 01-31
      retval += date.getDate();
    } else if (letter == "D") { //  Dimanche - Lundi
      retval += days[date.getDay()];
    } else if (letter == "m") { // 0 - 11
      retval += date.getMonth() + 1;
    } else if (letter == "M") { // Janvier - Février
      retval += months[date.getMonth()];
    } else if (letter == "Y") { // 2020
      retval += date.getFullYear();
    }
    else {
      retval += letter;
    }
  }
  return retval;
}

// VUE.js APP
const app = new Vue({
  el: "#app",
  data: {
    // config par défaut
    possibleHours: ["7:59", "9:29", "10:59", "12:30", "13:59", "15:29", "16:59", "18:30"],
    days: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"],
    messageTemplate: "C'est parti ! Nous avons SUBJECT, go aller sur LINK !",

    // variables d'état
    currentGroupSelected: "",

    // stockage
    current1stMonday: dateToString(get1stMondayDate(), "d/m/Y"),
    remindersData: {}, // ["group"]["day"]["hour"]
    groupsWebhooks: {} // "102" -> "webhook URL"
  },
  computed: {
  },
  methods: {
    reset_groupsData() {
      const lesGroupes = {
        "100": [1,12],
        "200": [1,9]
      }
      for (let annee in lesGroupes) { // va faire les 1A puis les 2A
        for (let prefix = lesGroupes[annee][0]; prefix <= lesGroupes[annee][1]; prefix++) {
          const groupName = parseInt(annee) + prefix;
          if (this.currentGroupSelected == "") {
            this.currentGroupSelected = groupName;
          }
          this.groupsWebhooks[groupName.toString()] = `Entrer l'URL du webhook pour le groupe ${groupName}`;
        }
      }

      console.log("groupsData = ", this.groupsWebhooks);
    },
    reset_remindersData() {
      for (let groupName in this.groupsWebhooks) {
        const firstHour = this.possibleHours[0];
        this.remindersData[groupName] = {};
        this.remindersData[groupName][this.current1stMonday] = {};
        this.remindersData[groupName][this.current1stMonday][firstHour] = "BONJOUR TOUT LE MONDE, C'EST L'HEURE D'ALLER EN COURS !!";
      }
      console.log("remindersData = ", this.remindersData);
    }
  },












  created() {
    this.reset_groupsData();
    this.reset_remindersData();
  }
});
