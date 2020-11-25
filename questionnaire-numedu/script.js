
const script = {};
const GET_TEXT = "get text"; // just to add the color

script["start"] = [
  "Tout d'abord, rien qu'en lisant la présentation de notre sujet, que savez-vous sur ce sujet.<br> Quels sont vos \"à-priori\" ?",
  GET_TEXT, // wainting text
  "Il est fort probable que vous ayez parlé de télétravail, de confinement, et de cours à distance.",
  `C'est en fait la première idée reçue sur ce sujet, et ce n'est pas vraiment ce que l'on cherche à traiter dans notre exposé.

Ce que nous souhaitons démontrer, ce n'est pas tant que le numérique puisse remplacer l’éducation, mais plutôt qu'il puisse rendre les cours plus efficaces ou plus intéressants.
Nous pensons que bien entendu, cette pratique doit être encadrée par un enseignant compétent.`,
  "Pour voir les perspectives possible, regardez cet encadré d'explications : ",
  "modal explication_Apriori",
  {
    "choice": "êtes-vous : ",
    "Un élève déscolarisé, ou qui fait cours à distance cette année (hors contexte de confinement) ?": "next",
    "Un élève au collège": "next",
    "Un élève au lycée": "next",
    "Un étudiant": "Appliquer notre sujet dans les classes supérieures reste possible, mais un poil plus difficile comparé au collège ou au lycée.",
    "Un prof": "jump profs",
    "Un parent d'élève ou autre ?": "jump autre"
  }, // waiting choice

  // question pour les élèves
  "Est-ce qu'il y a des cours que vous trouveriez moins ennuyants si le numérique était utilisé ?",
  GET_TEXT,
  "Vous avez sans doute aimé certains de vos professeurs. Quelle était leur petite \"marque de fabrique\" ?",
  GET_TEXT,
  "Pensez-vous que le système éducatif français manque de pédagogie face aux autres pays tel que le Canada? Y a-t-il tout de même certains points positifs ?",
  GET_TEXT,
  {
    "choice": "Combien d'heures de sommeil avez-vous en période de cours ?",
    "moins de 6 heures": "next",
    "6 à 7 heures": "next",
    "7 à 8 heures": "next",
    "8 à 10 heures": "next",
    "plus de 10 heures": "next"
  },
  {
    "choice": "Pensez-vous dormir assez pour suivre convenablement les cours ?",
    "Oui": "next",
    "Plutôt oui": "next",
    "ça dépend des jours": "next",
    "Plutôt non": "next",
    "Non": "next"
  },
  "Une petite explication sur le temps de sommeil : ",
  "modal tempsSommeilNecessaire",
  {
    "choice": "Est-ce que vous dormez avec votre téléphone ? Vous arrive-t-il de vous coucher plus tard à cause de celui-ci ?",
    "Je dors avec mon téléphone, et il m'arrive de dépasser minuit": "next",
    "Je dors avec mon téléphone, mais je ne dépasse généralement pas minuit": "next",
    "Je dors avec mon téléphone, mais je ne le touche pas": "next",
    "Je ne dors pas avec mon téléphone": "next",
  },
  {
    "choice": "Selon vous, gérer votre temps de sommeil est-il de votre responsabilité ?",
    "Non, car il y a des facteurs de perturbations qui ne dépendent pas de moi (insomnies, famille couche-tard)": "next",
    "Plutôt non": "next",
    "Plutôt Oui": "next",
    "Oui": "next"
  },
  "jump polluNum"
];


script["profs"] = [ // guess what ? c'est la partie des profs.
  "### Nos questions pour les profs",
  {
    "choice": "Combien d'années d'expérience avez-vous ?",
    "Moins de 3 ans": "next",
    "Entre 3 et 6 ans": "next",
    "entre 6 et 10 ans": "next",
    "entre 10 et 18 ans": "next",
    "plus de 18 ans": "next"
  },
  "Dans quelle unité d'enseignement et à quel niveau enseignez-vous ?",
  GET_TEXT,
  {
    "choice": "Avez-vous un matériel informatique fonctionnel suffisant chez vous?",
    "Matériel pas assez performant, je me repose sur les ordis de mon établissement": "next",
    "J'ai un ordinateur mais il n'est pas assez performant pour mes besoins": "next",
    "Je préfère utiliser une tablette ou un téléphone au profit d'un ordinateur, ça fonctionne mieux": "next",
    "J'ai un ordinateur qui convient à mes besoins": "next"
  },
  {
    "choice": "Quel est votre niveau en informatique ?",
    "À part faire de la recherche sur internet, pas grand-chose de plus": "next",
    "Juste assez pour rédiger mes polycopiés et gérer ce qui est demandé à mes élèves": "next",
    "Supérieur à la moyenne, assez pour innover face à mes collègues": "next",
    "Pas autant que Elliot Alderson, mais un niveau considérable quand même...": "next"
  },
  {
    "choice": `Le programme pédagogique tente d'être davantage numérique avec les réformes. Selon vous, permettent-ils de rendre votre cours plus attractif ou compréhensif, ou bien cela aurait l'effet inverse ?`,
    "J'ai l'impression que ça apporte d'autant plus de difficultés": "next",
    "ça n'a pas de réel changement": "next",
    "Les élèves sont plus attentifs avec": "next",
    "Les deux... certains élèves sont démunis tandis que d'autres sont à l'aise. Ça crée une inégalité": "next"
  },
  {
    "choice": `Votre établissement possède-t-il un Espace Numérique de Travail (monlycee.net, ecoledirecte.com...) ?`,
    "À part enregistrer les notes des élèves, pas grand chose de plus": "next",
    "ça remplace mon mail académique pour discuter avec mes élèves, mais sans plus": "next",
    "Juste pour partager des fichiers ou créer des interros, mais sans plus": "next",
    "Les trois ! C'est un outil complet.": "next"
  },
  `Ressentez vous le besoin de formations numérique, pour faire des choses que vos collègues savent faire mais pas vous ?
  Avez-vous demandé ou bénéficié de l'aide de certains collègues pour manier ou faire de nouvelles choses avec ces outils ?`,
  GET_TEXT,
  `Avez-vous déjà innové pour rendre vos cours attractifs ? Si oui, qu'avez-vous fait ? Cela a-t-il eu un impact positif, ou négatif ?`,
  GET_TEXT,
  `Le fait d'effectuer certaines tâches depuis votre ordinateur vous permet-il d'être plus productif ?
  au contraire, quelles sont les tâches informatiques très popularisées par vos collègues que vous préférez faire à la main.`,
  GET_TEXT,
  {
    "choice": "Que pensez-vous de l'utilisation de jeux vidéos ou l'utilisation de la réalité virtuelle dans certains de vos cours ?",
    "Il faudrait avoir du budget, mais ça peut être bénéfique pour les révisions": "next",
    "Pourquoi pas, mais je ne vois pas comment faire quelque chose de concret dessus": "next",
    "Mon avis est partagé": "next",
    "C'est une perte de temps. Je ne pense pas que ce soit si bénéfique.": "next"
  },
  {
    "choice": "Est-ce que à l'issue du questionnaire, vous auriez envie d'appliquer quelques-unes de nos idées dans vos cours ?",
    "À vrai dire, je n'ai aucun secret sur ce sujet": "next",
    "ça m'a donné des idées, il faut que je me renseigne": "next",
    "Je n'ai pas eu l'impression d'apprendre grand chose...": "next"
  },
  "jump polluNum"
];

script["autre"] = [
  "### Nos questions pour les adultes",
  {
    "choice": "Votre utilisation principale du numérique ?",
    "Les suites bureautiques" : "next",
    "Youtube et compagnie" : "next",
    "Les réseaux sociaux" : "next",
    "Me cultiver sur des sites" : "next",
    "La programmation" : "next",
    "autre" : "next"
  },
  {
    "choice": "Utilisez-vous le numérique de manière régulière ?",
    "Ma télé me suffit": "next",
    "Seulement dans le besoin": "next",
    "Régulièrement": "next",
    "Quotidiennement": "next",
    "Presque toujours !": "next"
  },
  "Quelle est votre opinion sur le numérique en général, ainsi que sur ses possibles conséquences ?",
  GET_TEXT,
  "jump polluNum"
];

script["polluNum"] = [
  "### La question de la pollution numérique",
  {
    "choice": "Savez-vous comment fonctionne **internet**, et où sont stockés tous les programmes qui le font tourner, ainsi que vos données ?",
    "Aucun secret pour moi ! C'est pas comme si c'était mon travail...": "next",
    "Plutôt bien.": "next",
    "Juste la base. Des ordis connectés dans des gros entrepôts.": "next",
    "Pas grand-chose": "next",
    "Je ne m'y intéresse pas": "next"
  },
  "modal fonctionnementInternet",
  "Que connaissez-vous à propos du lien entre la pollution et l'univers numérique ?",
  GET_TEXT,
  {
    "choice": `Connaissez-vous des entreprises "responsables" face à ce problème ? Que pensez-vous de leur politique ?`,
    "C'est nécessaire, plus d'entreprises devraient le faire": "next",
    "C'est une bonne chose.": "next",
    "Autre avis": "next",
    "C'est juste pour se donner une bonne image, alors qu'elles contribuent à l'exploitation humaine.": "next"
  },
  "modal entreprisesResponsables",
  {
    "choice": "Utilisez-vous régulièrement vos mails ? ",
    "Oui, presque tous les jours": "next",
    "Assez, juste pour le travail ou avoir les dernières nouvelles": "next",
    "Peu, juste parce-que c'est nécessaire": "next",
    "Pas du tout. Je ne connais même plus mon mot de passe...": "next"
  },
  {
    "choice": "Supprimez-vous les mails inutiles ?",
    "Oui, généralement une fois lus": "next",
    "Assez, pour laisser de la place": "next",
    "Peu, juste quand c'est nécessaire": "next",
    "Pas du tout. C'est trop casse-tête...": "next"
  },
  {
    "choice": "Y a-t-il tellement de messages dans votre boite e-mail qu'il devient impossible de faire le tri entre ce qui doit ou ne doit pas être supprimé ?",
    "J'ai abandonné, rien que voir le nombre \"750 non-lus\" me décourage": "next",
    "J'y arrive": "next",
    "Facile ! Je reçois tellement peu de mails...": "next"
  },
  "modal pollutionMails",
  {
    "choice": "Utilisez-vous de manière personnelle le cloud (google docs, one drive, Wetransfer...) ? Pour quelles raisons ?",
    "Surtout pour partager mes fichiers.": "next",
    "Autant de stockage gratuit ! Pourquoi se casser la tête avec une clé USB ?": "next",
    "Les deux : partage et stockage perso.": "next",
    "Je n'utilise pas beaucoup ce genre de choses.": "next"
  },
  "modal pollutionCloud",
  {
    "choice": "Possédez-vous un appareil intelligent, tel qu'un haut-parleur, un électroménager ou une ampoule connectée ?",
    "Oui, encore aujourd'hui": "next",
    "J'ai déjà eu ça une fois, mais plus maintenant": "next",
    "Non": "next"
  },
  {
    "choice": "Que pensez-vous de l'utilité de ces appareils ?",
    "C'est très pratique !": "next",
    "Pourquoi pas ?": "next",
    "Sans opinion": "next",
    "ça coûte cher inutilement": "next",
    "Je n'en ai pas besoin": "next"
  },
  `On estime qu'un téléphone a une durée de vie d'environ 2 ans, et de 5 ans pour un ordinateur de bonne qualité.
  Qu'en est-il pour vos appareils électroniques ?`,
  {
    "choice": `On estime qu'un téléphone a une durée de vie d'environ 2 ans, et de 5 ans pour un ordinateur de bonne qualité.
    Qu'en est-il pour vos appareils électroniques ?`,
    "Pire pour moi... Un téléphone par année": "next",
    "De même pour moi : deux ans en moyenne": "next",
    "De même pour moi, sauf pour l'ordi": "next",
    "ça dure plus longtemps pour moi": "next"
  },
  {
    "choice": "Vous arrive-t-il d'acheter un nouveau smartphone car celui-ci est trop lent ? Achetez-vous réellement un appareil adapté à vos besoins en termes de performance ?",
    "ça m'arrive.": "next",
    "ça m'arrive, mais pour d'autres raisons.": "next",
    "Pas vraiment. Ce que j'ai me convient.": "next"
  },
  "modal pollutionFabrication",
  {
    "choice": "Combien de temps passez-vous à regarder des vidéos sur internet (y compris pour écouter de la musique) ?",
    "3 heures par semaine, ou moins": "next",
    "Entre 3 et 7 heures par semaine": "next",
    "2 heures par jour": "next",
    "entre 2 et 4 heures par jour": "next",
    "entre 4 et 8 heures par jour": "next",
    "au delà de 8 heures": "next"
  },
  "modal pollutionYoutube",
  "jump santeNum"
];

script["santeNum"] = [
  "### Nos questions sur la santé et le numérique",
  "En ce moment même, des laboratoires du monde entier étudient l'impact des outils numériques sur les comportements du cerveau et de notre corps. Selon Daphné Bavelier, professeur en neuroscience à l'Université de Genève, il faut en moyenne 20 ans pour mener une étude et arriver à une conclusion. Or l'omniprésence des écrans est apparue il y a près de 8 ans.",
  "La relation entre la santé et le numérique est encore pleine d'incertitudes. Nous tentons au cours de notre sujet de voir l'état des différentes hypothèses et expérimentations à propos de l'impact des outils numériques sur notre santé, qu'il soit psychologique, physique ou sociale.",
  {
    "choice" : "Selon vous, à partir de quelle classe le numérique pourrait être introduit en tant qu'outil pédagogique ?",
    "Dès la maternelle": "next",
    "Pas avant le CP": "next",
    "Pas avant le CM1": "next",
    "Pas avant le collège": "next",
    "Pas avant le lycée ?!": "next"
  },
  "modal observationsActuellesSante",
  "En parlant des effets secondaires, pensez-vous que les écrans nuisent au lien social ?",
  GET_TEXT,
  "modal ecransEtLienSocial",
  {
    "choice": "Pensez-vous que les écrans peuvent entrainer la myopie ?",
    "Oui ": "next",
    "Je ne sais pas...": "next",
    "Non, c'est à cause d'autre chose": "next",
    "Absurde !": "next",
    "Je n'ai jamais entendu parler de cette idée-là.": "next"
  }, // waiting choice
  "modal ecransEtMyopie",
  {
    "choice" : "Selon vous, le numérique nuit-il à la concentration ?",
    "Oui !": "next",
    "Plutôt oui": "next",
    "ça dépend de quelle utilisation": "next",
    "Je ne sais pas": "next",
    "Je ne pense pas que ça nuit à la concentration": "next"
  },
  {
    "choice" : "à votre avis, l'utilisation du numérique peut-il au contraire améliorer certaines capacités physiques ?",
    "Oui, à mon avis": "next",
    "ça dépend de quelle utilisation": "next",
    "Je ne sais pas": "next",
    "Je ne pense pas": "next"
  },
  "modal numAmeliorerCapacitesPhysiques",
  "Le numérique a-t-il déjà eu un effet néfaste sur votre santé ou celle de vos proche ? De quel type (physique, psychologique) ?",
  GET_TEXT,
  `Connaissez-vous des cas d'addiction au numérique (ou vous-même ?) ?
  Quel est votre avis dessus ?
  Quel était l'âge de la personne concernée, et pouvez-vous supposer une raison qui l'a menée à cette addiction ?`,
  GET_TEXT,
  {
    "choice" : `Pensez-vous que, si jamais le numérique deviendrait un outil quotidien à part entière dans nos classes, des lois sur la sécurité et le droit à la "déconnexion" serait nécessaire ?`,
    "Oui": "next",
    "Plutôt oui": "next",
    "Sans Opinion": "next",
    "Je ne pense pas que c'est nécessaire. C'est un outil comme les autres": "next"
  },
  `De nos jours, nous voyons les très jeunes enfants (des bébés aux élèves de sixième) massivement exposés aux outils numériques.
  Nos recherches supposent un effet néfaste sur eux, non seulement sur la santé, mais aussi un manque de la maitrise de ces objets.`,
  "Qu'en pensez-vous ? Cela est-il de la responsabilité des parents, ou du système pédagogique ?",
  GET_TEXT,
  "jump finish"
];


script["finish"]  = [
  {
    "choice": "Pensez-vous avoir appris quelque-chose à propos de cette interview ?",
    "Oui": "next",
    "Non": "next",
    "Un peu": "next",
    "Pas grand-chose": "next",
  },
  "Une fois avoir fini la rédaction de notre dossier, nous souhaiterions que vous le lisiez afin d'exprimer votre avis dessus, et éventuellement recommencer ce questionnaire.",
  "Ce sujet vous intéresse-t-il ? Auriez-vous envie de lire notre dossier final, ou de parler de ce sujet avec des proches ?",
  GET_TEXT,
  "Si vous souhaitez lire notre rapport final, merci d'écrire votre e-mail. Nous vous répondrons d'ici une semaine ou deux.",
  GET_TEXT,
  {
    "choice": "Avez-vous trouvé le support du formulaire original (questionnaire via tchatbot automatique) ?",
    "Oui": "next",
    "Un peu trop long": "next",
    "Sans opinion": "next",
    "Je préfère les formulaires classiques": "next"
  },
  "C'est la fin du questionnaire. Si jamais vous souhaiterez expliquer votre point de vue, ou avez besoin de conseils, n'hésitez-pas à m'envoyer un mail à ![logane.tann_arobase_u-paris point fr](https://user-images.githubusercontent.com/28659185/98438798-e1f17300-20ec-11eb-80b4-7117be52ec21.png) *(n'oubliez pas le e à la fin de logan)*",
  "J'ai programmé ce questionnaire \"à la main\" avec Vue.JS. Si jamais vous souhaitez utiliser ce programme pour créer votre questionnaire, n'hésitez pas à regarder son code source sur <a href=\"https://github.com/LoganTann/LoganTann.github.io/tree/master/questionnaire-numedu/\" target=\"_blank\">mon repository GitHub</a> ou à m'envoyer un e-mail.",
  "end"
];

// MODALS ----------------------------------------------------------------------

modals = {};
modals["explication_Apriori"] = `
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

modals["fonctionnementInternet"] = `
  Internet fonctionne grâce à des programmes qui tournent 24 heures sur 24. Et qui dit programme, dit bien ordinateur qui chauffe. On appelle ces ordinateurs des "serveurs", et sont entreposés par milliers dans des "fermes numériques", plus communément appelées datacentres.

  La consommation pour les faire fonctionner y est astronomique, et encore, ce n'est qu'une petite part comparée à la climatisation déployée pour refroidir toutes ces machines.
`;

modals["entreprisesResponsables"] = `De nos jours, les "géants du web" tentent d'avoir une attitude plus responsable envers la nature. Nous pouvons prendre l'exemple de Google qui a fait fonctionner l'ensemble de ses datacentres en énergie renouvelable. Mais rappelons que malgré ces actions, espérer voir un changement positif dépend surtout de votre utilisation des outils numérique.`;

modals["pollutionMails"] = `
  Saviez-vous que les logiciels de mails font plusieurs copies des échanges (parfois sur dix serveurs différents) afin d'assurer la continuité du service si jamais un tombe en panne ou nécessite une maintenance ? Un mail peut vous paraitre léger, mais stocké en grande quantité, pollue beaucoup.

  Voici le petit conseil que je vous propose : en ouvrant le mail, vous avez trois possibilités :
  * Le mettre à la corbeille. Tout comme un courrier marqué comme "spam", ils restent encore 30 jours dans le dossier de suppression, avant d'être réellement détruit.
  * Si le mail est vraiment important : Si vous en aurez besoin dans le mois, laissez-le dans votre boite de réception, sinon, déplacez le systématiquement dans le dossier archives.
  * En cas d'urgence face à un mail supprimé, vous pouvez demander à vos collègues qui auraient sûrement une copie de ce même mail.

  Pensez à vous désinscrire des newsletters inutiles, et essayez de garder l'objectif d'une unique page de mail par boites que vous possédez ! Oui, c'est possible : je continue de le faire depuis plus de deux ans, et je n'ai jamais eu un quelconque problème !
`;

modals["pollutionCloud"] = `
  C'est exactement la même explication que le mail, sauf qu'il est maintenant question de giga octets.
  **Si vous avez besoin de les partager**, utilisez des services de cloud temporaires tel que <a href="https://dl.free.fr" target="_blank">dl.free.fr</a> qui supprime vos fichiers au bout de 30 jours d'inactivité. Pour la collaboration en temps réel, supprimez les fichiers qui sont désormais inutilisés. Posez-vous la question "Est-ce que j'en ai réellement besoin, et est-ce que c'est la bonne solution ?"
  **Pour archiver vos fichiers**, faites plusieurs copies sur vos clés USBs ! Non seulement celle-ci n'a pas besoin d'un climatiseur supplémentaire, mais vos données ne seront pas non plus dans les mains de l'entreprise qui les stockes !
`;

modals["pollutionFabrication"] = `
  On parle beaucoup de la consommation énergétique, mais il y a aussi des impacts lors de la fabrication et de la fin de vie d'un appareil.

  La fabrication, en particulier l'approvisionnement en métaux rares, contribuent à l'exploitation des humains (cf. le <a href="https://www.youtube.com/watch?v=w2PZQ-XprQU" target="_blank">reportage Cash Investigation sur la fabrication des téléphones</a>), tandis que pour la fin de vie, vos chers appareils finissent souvent enfouis sous terre, à l'étranger (On peut parler de pollution décoloniale, qui est un sujet intéressant mais non traité dans notre dossier).
  Des alternatives à prix abordables (eh oui ! Même moins cher qu'un Iphone SE !) existent, tel que les achats responsables (marque FairPhone), le reconditionnement ou bien la réparation.
`;


modals["pollutionYoutube"] = `
  Le visionnage de vidéo par internet, que l'on appelle plus communément "streaming", est un des facteurs les plus polluants sur internet. Jusque-là, la technique pour créer une vidéo n'a pas réellement changée : il suffit seulement de faire défiler à une vitesse raisonnable des images (30 images par seconde en moyenne sur internet). Ainsi, la vidéo est parmi le type de fichier le plus utilisé qui prends le plus de place numériquement.

  Pour limiter l'impact de la pollution, vous ne pouvez pas grand-chose dans la manière dont c'est stocké, par contre, pour limiter le trafic (qui est tout aussi polluant, rappelons-le), avez-vous réellement besoin de visionner votre vidéo en FULL-HD. Surtout si vous êtes sur téléphone, réduisez la qualité de vidéo à 480p.
  Si vous écoutez seulement de la musique sans vous focaliser sur la vidéo en elle-même, via youtube pour profiter de son algorithme de suggestions par exemple, réduisez carrément à 144p. En général, limiter la qualité vidéo a peu d'impact sur la qualité sonore.
`;

modals["observationsActuellesSante"] = `
  Les observations des dernières études supposent que le numérique a des effets néfastes sur la santé pour les très jeunes enfants. L’ANSES (Agence nationale de sécurité sanitaire) met ainsi en garde contre une exposition excessive aux écrans dès le plus jeune âge, qui pourrait être associée à des troubles de la mémoire, du sommeil, ou de l’attention.

  L'isolement social, la dépression, le manque  d’activité  physique  ou  encore l'obésité sont des effets secondaires potentiels qu’il vaut mieux prévenir !

  De notre côté, nous recommandons l'interdiction du numérique en maternelle, l'utilisation très modérée en classe de primaire et une utilisation normale ("outil dans la classe") dès le collège.
`;

modals["ecransEtLienSocial"] = `
  Nous célébrons souvent l'outil technologique comme un moyen de combler la distance, et parfois le manque des autres. Néanmoins, est-ce que l'époque actuelle, de confinement général, ne nous montre pas la limite des textos, messages, webcam et autres outils ?

  Si nous devions donner notre avis, nous recommanderions les cours en classe plutôt que les cours à domicile, d'un point de vue principalement social, puisque les cours à domiciles pourraient faire souffrir la plupart des élèves d'un isolement potentiel. Les cours à distance imposés par le confinement démontrent bien les limites des outils technologiques pour remédier à cet aspect social.

  Cela rejoint notre première idée reçue : nous ne voulons pas remplacer l'éducation par des écrans, mais plutôt utiliser le numérique comme un outil dans nos salles de classe. D'ailleurs, le numérique permets de faire connaissance de certaines personnes sans se soucier de la distance. On pourrait potentiellement supposer qu'en cours de langue, les élèves puissent avoir des correspondants et communiquer avec eux par messages textuels !

  Même si objectivement, nous préférons l'enseignement en classe, il ne faut pas voir l'enseignement à domicile comme un fléau. Bien que récemment, Emmanuel Macron ait proposé vouloir abolir cette forme d'éducation en raison du séparatisme islamique, il faut savoir que beaucoup de personnes, souffrant par exemple de maladies ou de traumatismes, sont dans la nécessité de suivre ce genre d'enseignement.

  Enfin, tous les membres du groupe ont effectué leur formation en présentiel. Ainsi, notre avis rendu dans l'exposé est assez objectif, et il est difficile de prendre du recul. Nous avons par exemple des connaissances qui ont quitté les cours au profit du distanciel, ou bien en ont fait durant toute leur scolarité dès leur plus jeune âge.
  Selon la plupart de ces personnes, tout est une question d'habitude et d'organisation ; et force est de constater que la plupart des personnes qui ont fait leurs cours à distance bénéficient d'une grande flexibilité et sont remarquablement douées scolairement !
`;

modals["ecransEtMyopie"] = `
  Les études observent que la relation entre la myopie et les écrans ne semblent pas avoir de liens directs.
  En réalité, pour résumer, il semble y avoir une relation entre lumière du jour et myopie. Une exposition quotidienne suffisante à la lumière du jour ralentit très fortement l'expansion de cette maladie (qui est principalement causée par un facteur génétique), tandis qu'une trop faible exposition produit l'effet inverse.

  On observe que les personnes qui restent beaucoup devant un écran ne sortent pas assez, c'est pour cela qu'il y ait eu cette idée reçue.

  Cela est un point intéressant pour notre sujet. D'une part, que l'on utilise les tablettes ou pas dans la classe, il est recommandé de faire certains cours dehors, ou bien d'avoir une exposition lumineuse quotidienne suffisante. On pourrait imaginer la possibilité d'emmener les élèves dehors pour observer le terrain, accompagné de tablettes afin de prendre des notes, compléter sa copie, et avoir des documents avec lui.

  D'autre part, que si les cours en distanciel (comme nous sommes en train de bien le subir cette année...) sont imposés, ne pas surcharger les élèves de travail afin qu'ils puissent se permettre de sortir assez longtemps chaque jour. L'étude à propos du lien entre la myopie et l'exposition lumineuse observe une recrudescence de la maladie dans les pays est-asiatiques, alors que leur système scolaire fait partie d'un des plus élitistes et chargés au monde. Toujours dans la notion de confinement, un coach dédiée afin d'accompagner les élèves à distance est une bonne idée d'application à mettre en place. Peut-être travaillerons-nous sur une application de ce genre pour nos projets applicatifs dans un an ?

  Attention, cela n'est pas à généraliser ! Il ne faut pas penser que les écrans n'ont pas d'effets néfastes : d'une part, les études sont encore en train de faire des recherches, et d'autre part, il a été démontré que la lumière bleue des écrans facilite les insomnies. Il est uniquement question des liens entre la myopie et les écrans.

`;

modals["numAmeliorerCapacitesPhysiques"] = `
  On n'a pas encore rempli ça...
`;
