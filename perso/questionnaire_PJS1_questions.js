
const script = {};
const GET_TEXT = "get text"; // just to add the color

script["start"] = [
  "Tout d'abord, rien qu'en lisant la présentation de notre sujet, que savez-vous dessus.<br> Quels sont vos \"à-priori\" sur ce sujet ?",
  GET_TEXT, // wainting text
  "Il est fort probable que vous ayez parlé de télétravail, de confinement, et de cours à distance.",
  `C'est en fait la première idée reçue sur ce sujet, et ce n'est pas vraiment ce que l'on cherche à traiter dans notre exposé.

Ce que nous souhaitons démontrer, ce n'est pas que le numérique puisse remplacer l'éducation, mais plutôt rendre les cours plus efficaces ou plus intéressants en se servant des outils numériques.
Nous pensons que bien entendu, cette pratique doit être encadrée par un enseignant compétant.`,
  "Pour voir les perspectives possible, regardez cet encadré d'explications (obligatoire si prof): ",
  "modal explication_Apriori",
  {
    "choice": "êtes-vous : ",
    "Un élève désolarisé, ou qui fait cours à distance cette année (hors contexte de confinement) ?": "next",
    "Un élève au Collège": "next",
    "Un élève au Lycée": "next",
    "Un étudiant": "Appliquer notre sujet dans les classes supérieures reste possible, mais un poil plus difficile comparé au collège ou au lycée.",
    "Un prof": "jump profs",
    "Un parent d'élève ou autre ?": "jump autre",
  }, // waiting choice

  // question pour les élèves
  "Est-ce qu'il y a des cours que vous trouveriez moins ennuyants si le numérique était utilisé ?",
  GET_TEXT,
  "Vous avez sans doute aimé certains de vos professeurs. Quelle était leur petite \"marque de fabrique\" ?",
  GET_TEXT,
  "Pensez-vous que le système éducatif français manque de pédagogie face aux autres pays tel que le Canada? Y a-t-il tout de même certains points positifs ?",
  GET_TEXT,
  "Combien d'heures de sommeil avez-vous du lundi au vendredi ?",
  GET_TEXT,
  "Pensez-vous dormir assez pour suivre convenablement les cours ?",
  GET_TEXT,
  "modal tempsSommeilNecessaire",
  "Est-ce que vous dormez avec votre téléphone ? Vous arrive-t-il de vous coucher plus tard à cause de celui-ci ?",
  GET_TEXT,
  "Selon vous, gérer votre temps de sommeil est-il de votre responsabilité ?",
  GET_TEXT,
  "jump label"
];


script["profs"] = [ // guess what ? c'est la partie des profs.
  "Combien d'années d'expérience avez-vous ?",
  GET_TEXT,
  "Dans quel domaine et à quel niveau enseignez-vous ?",
  GET_TEXT,
  "Avez-vous un matériel informatique fonctionnel suffisant ? (ordinateur un minimum performant par exemple, smartphone personnel également utilisable de manière fluide)",
  GET_TEXT,
  "Quel est votre niveau en informatique (logiciels de bureautique, PowerPoint, connaissances additionnelles) ?",
  GET_TEXT,
  ` Le programme pédagogique vous force-t-il à l'utilisation d'ordinateurs dans vos cours (synthèses de recherches, EXAO, tableurs et suites bureautiques) ?
    Selon vous, permettent-ils de rendre votre cours plus attractif ou compréhensif, ou bien cela aurait l'effet inverse ?`,
  GET_TEXT,
  `Ressentez vous le besoin de formations dans certains logiciels, faire des choses que vos collègues savent faire mais pas vous ?
  Seriez-vous aussi intéressé de formations afin de rendre vos cours plus attractifs à partir du numérique ?
  Avez-vous demandé ou bénéficié de l'aide de certains collègues pour manier ou faire de nouvelles choses avec ces outils ?`,
  GET_TEXT,
  `Votre établissement possède-t-il un Espace Numérique de Travail (monlycee.net, ecoledirecte.com...) ?
  Celui-ci a-t-il assez d'outils pédagogiques (communication proche avec vos élèves)?
  Est-ce utilisé pour autre chose que regarder des notes ?`,
  GET_TEXT,
  `Avez-vous déjà utilisé un support numérique de votre initiative pour dynamiser votre cours (ceux que nous avons listé au début par exemple), non imposé par le programme scolaire ?
  Cela a-t-il eu un impact positif, ou négatif ?`,
  GET_TEXT,
  `Le fait d'effectuer certaines tâches depuis votre ordinateur vous permet-il d'être plus productif ?
  au contraire, quelles sont les tâches informatiques très popularisées par vos collègues que vous préférez faire à la main.`,
  GET_TEXT,
  "Que pensez-vous de l'utilisation de jeux vidéos ou l'utilisation de la réalité virtuelle dans certains de vos cours ?",
  GET_TEXT,
  "Est-ce que à l'issue du questionnaire, vous auriez envie d'appliquer quelques unes de nos idées dans vos cours ?",
  GET_TEXT,
  "jump label"
];

script["autre"] = [
  "Vous êtes dans la partie autre",
  "coucou !!!"
];

script["label"]  = [
  "vous avez atteint la fin ! salut ! ",
  "hyeay heay",
  "end"
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

modals["tempsSommeilNecessaire"] = `
Nous rappelons que le temps de sommeil nécessaire pour un adulte est de 7 heures !
Votre capacité à traiter les informations dépendent de votre sommeil, et c'est une condition à la réussite.
`;
