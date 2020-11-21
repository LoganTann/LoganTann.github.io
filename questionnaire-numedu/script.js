
const script = {};
const GET_TEXT = "get text"; // just to add the color

script["start"] = [
  "Tout d'abord, rien qu'en lisant la présentation de notre sujet, que savez-vous dessus.<br> Quels sont vos \"à-priori\" sur ce sujet ?",
  GET_TEXT, // wainting text
  "Il est fort probable que vous ayez parlé de télétravail, de confinement, et de cours à distance.",
  `C'est en fait la première idée reçue sur ce sujet, et ce n'est pas vraiment ce que l'on cherche à traiter dans notre exposé.

Ce que nous souhaitons démontrer, ce n'est pas que le numérique puisse remplacer l'éducation, mais plutôt rendre les cours plus efficaces ou plus intéressants en se servant des outils numériques.
Nous pensons que bien entendu, cette pratique doit être encadrée par un enseignant compétant.`,
  "Pour voir les perspectives possible, regardez cet encadré d'explications : ",
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
  "Une petite explication sur le temps de sommeil : ",
  "modal tempsSommeilNecessaire",
  "Est-ce que vous dormez avec votre téléphone ? Vous arrive-t-il de vous coucher plus tard à cause de celui-ci ?",
  GET_TEXT,
  "Selon vous, gérer votre temps de sommeil est-il de votre responsabilité ?",
  GET_TEXT,
  "jump polluNum"
];


script["profs"] = [ // guess what ? c'est la partie des profs.
  "### Nos questions pour les profs",
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
  "jump polluNum"
];

script["autre"] = [
  "### Nos questions pour les adultes",
  "Utilisez-vous le numérique de manière régulière (travail, divertissement) ?",
  GET_TEXT,
  "Quelle est votre opinion face au numérique en général, ainsi que ces possibles conséquences (si vous savez quelques-unes sur ce sujet, n'hésitez-pas à nous en faire part)",
  GET_TEXT,
  "Est-ce que à l'issue du questionnaire, vous auriez envie d'appliquer quelques unes de nos idées dans vos cours ?",
  GET_TEXT,
  "jump polluNum"
];

script["polluNum"] = [
  "### La question de la pollution numérique",
  "Savez-vous comment fonctionne internet, et où sont stockées tous les programmes qui le font tourner, ainsi que vos données ?",
  GET_TEXT,
  "modal fonctionnementInternet",
  "Que connaissez-vous à propos du lien entre la pollution et l'univers numérique ?",
  GET_TEXT,
  `Connaissez-vous des entreprises "responsables" face à ce problème ? Que pensez-vous de leur politique ?`,
  GET_TEXT,
  "modal entreprisesResponsables",
  "Utilisez-vous régulièrement vos mails ? ",
  GET_TEXT,
  "Supprimez-vous les mails inutiles ?",
  GET_TEXT,
  "Y a-t-il tellement de messages dans votre boite e-mail qu'il devient impossible de faire le tri entre ce qui doit ou ne doit pas être supprimé ?",
  GET_TEXT,
  "modal pollutionMails",
  "Utilisez-vous de manière personnelle le cloud (google docs, one drive, Wetransfer...) ? Pour quelles raisons ?",
  GET_TEXT,
  "modal pollutionCloud",
  "Possédez-vous un appareil intelligent, tel qu'une enceinte, un électroménager ou une ampoule connectée ?",
  GET_TEXT,
  "Que pensez-vous de l'utilité de ces appareils ?",
  GET_TEXT,
  `On estime qu'un téléphone a une durée de vie d'environ 2 ans, et de 5 ans pour un ordinateur de bonne qualité.
  Qu'en est-il pour vos appareils électroniques ?`,
  GET_TEXT,
  "Vous arrive t-il d'acheter un nouveau smartphone car celui-ci est trop lent ? Achetez-vous réellement un appareil adapté à vos besoins en termes de performance ?",
  GET_TEXT,
  "modal pollutionFabrication",
  "Combien de temps passez-vous à regarder des vidéos sur internet par semaines (y compris pour écouter de la musique) ?",
  GET_TEXT,
  "modal pollutionYoutube",
];

script["santeNum"] = [,
  "En ce moment même, des laboratoires du monde entier étudient l'impact des outils numériques sur les comportements du cerveau et de notre corps. Selon Daphné Bavelier, professeur en neuroscience à l'Université de Genève, il faut en moyenne 20 ans pour mener une étude et arriver à une conclusion. En comparaison, l'omniprésence des écrans est apparue il y a près de 8 ans.",,
  "La relation entre la santé et le numérique est encore pleine d'incertitudes. Nous tentons au cours de notre sujet de voir l'état des différentes hypothèses et expérimentations à propos de l'impact des outils numériques sur notre santé, qu'elle soit psychologique, physique ou sociale. Ce que nous cherchons à savoir dans notre axe à propos de la santé, c'est de définir les différentes limites à son application.",
  "Selon vous, à partir de quelle classe le numérique pourrait être introduit en tant qu'outil pédagogique ?",
  GET_TEXT,
  "modal observationsActuellesSante",
  "En parlant des effets secondaires, pensez-vous que les écrans nuisent au lien social ?",
  GET_TEXT,
  "modal ecransEtLienSocial",
  {
    "choice": "Pensez-vous que les écrans peuvent entrainer la myopie ?",
    "Oui ": "next",
    "Je ne sais pas...": "next",
    "Absurde !": "next",
    "Je n'ai jamais entendu parler de cette idée là.": "next"
  }, // waiting choice
  "modal ecransEtMyopie",
  "Selon vous, le numérique nuit-il à la concentration ?",
  GET_TEXT,
  "à votre avis, l'utilisation du numérique peut-il au contraire __améliorer certaines capacités physiques__ ?",
  GET_TEXT,
  "modal numAmeliorerCapacitesPhysiques",
  "Le numérique a-t-il déjà eu un effet néfaste sur votre santé ou celle de vos proche ? Quel type (physique, psychologique) ?",
  GET_TEXT,
  `Connaissez-vous des cas d'addiction au numérique (ou vous-même ?) ?
  Quel est votre avis dessus ?
  Quel était l'age de la personne concernée, et pouvez-vous supposer une raison qui l'a menée à cette addiction ?`,
  GET_TEXT,
  `Pensez-vous que, si jamais le numérique deviendrait un outil quotidien à part entière dans nos classes, des lois sur la sécurité et le droit à la "déconnexion" serait nécessaire ?`,
  GET_TEXT,
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
    "pas grand chose": "next",
  },
  "Une fois avoir fini la rédaction de notre dossier, nous souhaiterions que vous le lisiez afin d'exprimer votre avis dessus, et éventuellement recommencer ce questionnaire.",
  "Ce sujet vous intéresse t-il ? Auriez-vous envie de lire notre dossier final, ou de parler de ce sujet avec des proches ?",
  GET_TEXT,
  "Avez-vous trouvé le support du formulaire original (questionnaire via tchatbot automatique) ?",
  GET_TEXT,
  "C'est la fin du questionnaire. Si jamais vous souhaiterez expliquer votre point de vue, ou avez besoin de conseils, n'hésitez-pas à m'envoyer un mail à ![logane.tann_arobase_u-paris point fr](https://user-images.githubusercontent.com/28659185/98438798-e1f17300-20ec-11eb-80b4-7117be52ec21.png) *(n'oubliez pas le e à la fin de logan)*",
  "J'ai programmé ce questionnaire \"à la main\" avec Vue.JS. Si jamais vous souhaitez utiliser ce programme pour créer votre questionnaire, n'hésitez pas à regarder son code source sur [https://github.com/LoganTann/LoganTann.github.io/tree/master/questionnaire-numedu/](mon repository GitHub) ou à m'envoyer un e-mail.",
  "end"
];

// MODALS ----------------------------------------------------------------------

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

modals["fonctionnementInternet"] = `
  Internet fonctionne grâce à des programmes qui tournent 24 heures sur 24. Et qui dit programme, dit bien ordinateur qui chauffe. On appelle ces ordinateurs des "serveurs", et sont entreposés par milliers dans des "fermes numériques", plus communément appelées datacentres.

  La consommation pour les faire fonctionner y est astronomique, et encore, ce n'est qu'une petite part comparée à la climatisation déployée pour refroidir toutes ces machines.
`;

modals["entreprisesResponsables"] = `De nos jours, les "géants du web" tentent d'avoir une attitude plus responsable envers la nature. Nous pouvons prendre l'exemple de Google qui a fait fonctionner l'ensemble de ses datacentres en énergie renouvelable. Mais rappelons que malgré ces actions, espérer voir un changement positif dépend surtout de votre utilisation des outils numérique.`;

modals["pollutionMails"] = `
  Saviez-vous que les logiciels de mails font plusieurs copies des échanges (parfois sur dix serveurs différents) afin d'assurer la continuité du service si jamais un tombe en panne ou nécessite une maintenance ? Un mail peut vous paraitre léger, mais stocké en grande quantité, pollue beaucoup.

  Voici le petit conseil que je vous propose : en ouvrant le mail, vous avez trois possibilités :
  * Le mettre à la corbeille. Tout comme un courrier marqué comme "spam", ils restent encore 30 jours dans le dossier de suppression, avant d'être réellement détruit.
  * Si le mail est vraiment important : Si vous en aurez besoin dans le mois, laissez le dans votre boite de réception, sinon, déplacez le systématiquement dans le dossier archives.
  * En cas d'urgence face à un mail supprimé, vous pouvez demander à vos collègues qui auraient sûrement une copie de ce même mail.

  Pensez à vous désinscrire des newsletters inutiles, et essayez de garder l'objectif d'une unique page de mail par boites que vous possédez ! Oui, c'est possible : je continue de le faire depuis plus de deux ans, et je n'ai jamais eu un quelconque problème !
`;

modals["pollutionCloud"] = `
  C'est exactement la même explication que le mail, sauf qu'il est maintenant question de giga octets.
  **Si vous avez besoin de les partager**, utilisez des services de cloud temporaires tel que <a href="https://dl.free.fr" target="_blank">dl.free.fr</a> qui supprime vos fichiers au bout de 30 jours d'inactivité. Pour la collaboration en temps réel, supprimez les fichiers qui sont désormais inutilisés. Posez-vous la question "Est-ce que j'en ai réellement besoin, et est-ce que c'est la bonne solution ?"
  **Pour archiver vos fichier**, faites plusieurs copies sur vos clés USBs ! Non seulement celle-ci n'a pas besoin d'un climatiseur supplémentaire, mais vos données ne seront pas non plus dans les mains de l'entreprise qui les stockes !
`;

modals["pollutionFabrication"] = `
  On parle beaucoup de la consommation énergétique, mais il y a aussi des impacts lors de la fabrication et de la fin de vie d'un appareil.

  La fabrication, en particulier l'approvisionnement en métaux rares, contribuent à l'exploitation des humains (cf. le <a href="https://www.youtube.com/watch?v=w2PZQ-XprQU" target="_blank">reportage Cash Investigation sur la fabrication des téléphones</a>), tandis que pour la fin de vie, vos chers appareils finissent souvent enfouis sous terre, à l'étranger (On peut parler de pollution décoloniale, qui est un sujet intéressant mais non traité dans notre dossier).
  Des alternatives à prix abordables (eh oui ! Même moins cher qu'un Iphone SE !) existent, tel que les achats responsables (marque FairPhone), le reconditionnement ou bien la réparation.
`;


modals["pollutionYoutube"] = `
  Le visionnage de vidéo par internet, que l'on appelle plus communément "streaming", est un des facteurs les plus polluants sur internet. Jusque là, la technique pour créer une vidéo n'a pas réellement changée : il suffit seulement de faire défiler à une vitesse raisonnable (30 images par seconde en moyenne sur internet) des images. Ainsi, la vidéo est parmi le type de fichier le plus utilisé qui prends le plus de place numériquement.

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

  Cela rejoins notre première idée reçue : nous ne voulons pas remplacer l'éducation par des écrans, mais plutôt utiliser le numérique comme un outil dans nos salles de classe. D'ailleurs, le numérique permets de faire connaissance de certaines personnes sans se soucier de la distance. On pourrait potentiellement supposer qu'en cours de langue, les élèves puissent avoir des correspondants et communiquer avec eux par messages textuels !

  Même si objectivement, nous préférons l'enseignement en classe, il ne faut pas voir l'enseignement à domicile comme un fléau. Bien que récemment, Emmanuel Macron ait proposé vouloir abolir cette forme d'éducation en raison du séparatisme islamique, il faut savoir que beaucoup de personnes, souffrant par exemple de maladies ou de traumatismes, sont dans la nécessité de suivre ce genre d'enseignement.

  Enfin, tous les membres du groupe ont effectué leur formation en présentiel. Ainsi, notre avis rendu dans l'exposé est assez objectif, et il est difficile de prendre du recul. Nous avons par exemple des connaissances qui ont quitté les cours au profit du distanciel, ou bien en ont fait durant toute leur scolarité dès leur plus jeune âge.
  Selon la plupart de ces personnes, tout est une question d'habitude et d'organisation ; et force est de constater que la plupart des personnes qui ont fait leurs cours à distance bénéficient d'une grande flexibilité et sont remarquablement douées scolairement !
`;

modals["ecransEtMyopie"] = `
  Les études observent que la relation entre la myopie et les écrans ne semblent pas avoir de liens directs.
  En réalité, pour résumer, il semble y avoir une relation entre lumière du jour et myopie. Une exposition quotidienne suffisante à la lumière du jour ralentit très fortement l'expansion de cette maladie (qui est principalement causée par un facteur génétique), tandis qu'une trop faible exposition produit l'effet inverse.

  On observe que les personnes qui restent beaucoup devant un écran ne sortent pas assez, c'est pour cela qu'il y ait eu cette idée reçue.

  Cela est un point intéressant pour notre sujet. D'une part, que l'on utilise les tablettes ou pas dans la classe, il est recommandé de faire certains cours dehors, ou bien d'avoir une exposition lumineuse quotidienne suffisante. On pourrait imaginer la possibilité d'emmener les élèves dehors pour observer le terrain, accompagné de tablettes afin de prendre des notes, compléter sa copie, et avoir des documents avec lui.

  D'autre part, que si les cours en distanciel (comme nous sommes en train de bien le subir cette année...) sont imposés, ne pas surcharger les élèves de travail afin qu'ils puissent se permettre de sortir assez longtemps chaque jour. L'étude à propos du lien entre la myopie et l'exposition lumineuse observe une recrudescence de la maladie dans les pays est-asiatiques, alors que leur système scolaire font parti d'un des plus élitistes et chargés au monde. Toujours dans la notion de confinement, un coach dédiée afin d'accompagner les élèves à distance est une bonne idée d'application à mettre en place. Peut-être travaillerons-nous sur une application de ce genre pour nos projets applicatifs dans un an ?

  Attention, cela n'est pas à généraliser ! Il ne faut pas penser que les écrans n'ont pas d'effets néfastes : d'une part, les études sont encore en train de faire des recherches, et d'autre part, il a été démontré que la lumière bleue des écrans facilitent les insomnies. Il est uniquement question des liens entre la myopie et les écrans.

`;

modals["numAmeliorerCapacitesPhysiques"] = `
  On n'a pas encore rempli ça...
`;
