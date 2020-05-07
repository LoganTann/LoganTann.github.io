/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'pack': {
		title: 'Voir le contenu du paquet',
		subtitle: 'Voir le contenu du paquet',
		body: `<a href='cadeau/' target="_blank">Ouvrir le paquet dans un nouvel onglet</a>`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {
	"1": "1.jpg",
	"2": "2.jpg",
	"3": "3.jpg",
	"4": "4.jpg"
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	"fond-1": "fond-1.svg",
	"fond-2": "fond-2.svg",
	"fond-3": "fond-3.svg",
	"fond-4": "fond-4.svg",
	"fond-5": "fond-5.svg",
	"fond-6": "fond-6.svg",
	"fond-7": "fond-7.svg",
	"cnewsBlur": "cnewsBlur.jpg",
	"cnewsFinal": "cnews.jpg",
	"lolotchat" : "tchatWithLolo.jpg",
	"mort": "mort.jpg",
	"discord1": "discord1.jpg",
	"discord2": "discord2.jpg",
	"discord2": "discord3.jpg",
	"erreur": "erreur.jpg"
});


// Define the Characters
monogatari.characters ({
	'y': {
		name:  '{{player.name}}',
		color: '#5bcaff'
	},
	'lo': {
		name:  'Lolo le laurier',
		color: 'green'
	}
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene fond-1 with fadeIn',
		'centered ...',
		'centered ... ?',
		'centered Il fait noir',
		'centered Je ne peux rien voir du tout',
		{
			'Input': {
				'Text': 'Votre nom',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},
		'y Suis-je... Enfermée ?',
		'y Inspectons les lieux... je trouverai sans doute quelques indices.',
		'y Commençons par tatonner les bords',
		'Vous arrivez à discerner les bords de la pièce',
		'show scene fond-2 with fadeIn',
		'Vous pouvez identifier un ordinateur...',
		'y Impossible de trouver le bouton pour l\'allumer, il fait trop noir',
		'show scene fond-3 with fadeIn',
		'Vous trouvez également une télévision et en la touchant ...',
		'show scene fond-4 with fadeIn',
		'*clic*<br> *bzzzzzz*',
		'y Ah, je crois que j\'ai réussi à l\'allumer !!',
		"La télévision démarre, elle semble vielle... et ne pas avoir de télécommande pour changer de chaine.",
		"y Ah, ça arrive ! Peut être que j'aurai des nouvelles de l'extérieur ?",
		'show scene cnewsBlur with fadeIn',
		"La télévision a fini de démarrer, il est maintenant possible de voir le contenu",
		'show scene cnewsFinal with fadeIn',
		"y Qu'est-ce que ???",
		"Vous découvrez avec horreur le contenu, et décidez de ne pas aller plus loin",
		"y N'empêche, il y a un peu plus de lumière maintenant !",
		'show scene fond-5 with fadeIn',
		"Vous décidez alors d'allumer l'ordinateur.",
		"Ce sont ceux du lycée",
		"Sachant cela, vous décidez d'inspecter encore avec le peu de lumière, vu le temps de démarrage...",
		"Il semblerait qu'il n'y ait rien d'autre dans cette pièce, mis à part la table et la chaise.",
		"y Ah, et une porte en plus !",
		"*clac* *clac*",
		"y Fermée...",
		"Vous remarquez des mots dessus : ",
		"«Si vous parvenez à trouver la boite, vous pourrez m'ouvrir, et en plus remporter quelques prix.»",
		"y Hmm.",
		"Étant prof, vous vous doutez que ce sont vos élèves qui ont fait le coup, et qu'ils n'ont évidemment pas été tout seuls pour préparer ça ",
		"y Le prix ne serait pas un chantage pour pouvoir avoir de meilleures notes ?",
		'show scene fond-6 with fadeIn',
		"Vous vous détournez et allez vers le PC, qui venait juste à l'instant de s'allumer.",
		"y Voyons... Oh, un mot de passe...",
		"Il s'agissait d'un PC du lycée... modifié ? Seul un seul mot de passe est demandé, pas d'identifiant.",
		"y Ça vaut le coup de tenter. Il pourrait peut être y avoir des informations si c'est faux.",
		{
			'Input': {
				'Text': 'Mot de passe',
				'Validation': function (input) {
					const decodedinput = input.toLowerCase();
					return decodedinput.includes("c") && decodedinput.includes("new");
				},
				'Warning': 'Indice de mot de passe : ma chaine TV d\'informations préférée'
			}
		},
		"jump gotPasswdOk"
	],
	"gotPasswdOk": [
		"y Super !! j'ai trouvé le bon mot de passe !!",
		"Le PC démarra sans soucis. Une fenêtre s'ouvrit automatiquement",
		'show scene lolotchat with fadeIn',
		"y C'est une fenêtre de t'chat... Avec qui je suis ?",
		"Vous voyez le nom : Lolo",
		"Et la caméra est tout juste apparue : vous voyez une bête feuille A4 avec un laurier dessus.",
		"...",
		"lo Bonjour ! Vous êtes {{player.name}} ? Je suis lolo, le laurier !",
		"La voix de lolo semblait être modifiée.",
		"y Euh, bonjour ?",
		"lo Il semble que vous soyez enfermé ?",
		"y sans blague...",
		"lo T'inquiète. Je suis là pour t'aider à sortir. Je suis un petit laurier tout mignon gentil !",
		"«Aider à sortir» mais c'est sans doute lui qui a organisé l'enlèvement !",
		"y Ah ? Comment ?",
		"lo Il suffit juste de résoudre les différentes énigmes que je te propose.",
		"y Par quoi commencer ?",
		"lo Il y a dans le PC plusieurs images.",
		"show scene mort with zoomIn",
		"vous remarquez la présence d'un dossier et vous l'ouvrez.",
		"y Oui ?",
		"lo Observe-les et envoie moi une image qui justifie l'extinction des dinausores.",
		"show image 1",
		"*Voici l'image de la terre plate et la météorite*",
		"hide image 1",
		"show image 2",
		"*Voici l'image de la terre ronde et la météorite*",
		"hide image 2",
		"show image 3",
		"*Voici l'image de la terre ronde et le Coronavirus*",
		"hide image 3",
		"show image 4",
		"*Voici l'image de la terre plate et le Coronavirus*",
		"hide image 4",
		"lo Choisis celle qui te plaît le plus, mais attention, elle doit aussi me plaire !",
		{
			'Choice': {
				'Dialog': 'Choisis une image qui pourrait plaire à vous et à Lolo',
				'1': {
					'Text': 'Photo 1 : La terre plate et la météorite',
					'Do': 'jump Yes'
				},
				'2': {
					'Text': 'Photo 1 : La terre plate et la météorite',
					'Do': 'jump Yes'
				},
				'3': {
					'Text': 'Photo 1 : La terre plate et la météorite',
					'Do': 'jump Yes'
				},
				'4': {
					'Text': 'Photo 1 : La terre plate et la météorite',
					'Do': 'jump Yes'
				}
			}
		}
	],

	'Yes': [
		'show scene lolotchat with fadeIn',
		'Vous avez été contraint par une force mystérieuse de choisir la photo 2.',
		'lo GAGNÉÉÉÉ !!',
		'y Ouaiiiis !!',
		"y Que faut-il faire maintenant ?",
		"lo Vous ne pourrez pas trouver la boite sans une action spéciale. Écoutez bien : ",
		"lo Il faut vous rendre au barrage <b>hydoalcoolique</b>--...",
		"lo Enfin, je veux dire, hydrolique, vous voyez, celui du coté de la Seine ?",
		"y ...",
		"lo Et ensuite, à l'aire de jeu le plus proche de celui-ci, récupérer dans un arbre le téléphone suspendu à une branche haute.",
		"lo Une fois allumé, un site sera affiché et il suffira juste d'appuyer sur le bouton pour continuer l'aventure !",
		"y Et donc, comment je fais pour me rendre dehors ?",
		"lo Il suffit juste de demander gentillement à quelqu'un. Vous avez internet, non ?",
		"En effet, si je pouvais parler avec 'lolo' c'est que j'étais forcément connect",
		"lo Mais attention : votre connection est limitée. Il n'y a qu'un seul site qui est accessible. Trouvez celui le plus propice pour contacter le genre de personne qui pourrait vous aider",
		"*lo s'est déconnecté*",
		"Vous êtes de nouveau seule",
		"y «Trouvez celui le plus propice pour contacter le genre de personne qui pourrait vous aider», hein ?",
		"Donc, mes élèves? Ce qui veut dire qu'il faut se connecter à : ",
		{
			'Input': {
				'Text': 'https:// ??? .com',
				'Validation': function (input) {
					const decodedinput = input.toLowerCase();
					return decodedinput.includes("discord");
				},
				'Warning': 'Le site ne veut pas charger. Il faut entrer la bonne adresse.'
			}
		},
		"y Ça semble fonctionner !",
		'show scene erreur with fadeIn',
		"Vous entrez donc vos identifiants et une boite «Êtes vous un robot» assez particulière s'affiche...",
		"Il est demandé : «Cliquez sur l'erreur»",
		{
			'Choice': {
				'Dialog': 'Choisir une image qui prouverait que vous n\'êtes pas un robot	',
				'1': {
					'Text': 'cliquer sur le d apostrophe',
					'Do': 'y Je en suis pas cruelle à ce point'
				},
				'2': {
					'Text': 'cliquer sur ... l\'élève ?!',
					'Do': 'y C\'est assez sadique, en y repensant.'
				}
			}
		},
		'show scene discord2 with fadeIn',
		"En tout cas, cela a fonctionné !",
		"Vous décidez donc d'envoyer un message d'aide aux ts3",
		'...',
		"Vous voyez votre message se supprimer ?!",
		"Vous remarquez avec horreur que vous avez envoyé votre message sur le salon #maths",
		"Vous remarquez également que vous n'avez même pas envoyé dans la bonne classe",
		"y Mince, la fatigue...",
		'show scene discord1 with fadeIn',
		"En cliquant sur le serveur de la <b>bonne</b> classe, l'accès est bloqué.",
		"Un seul message est affiché : le votre.",
		"Peut être veut-on vous faire deviner votre propre devinette ?",
		{
			'Input': {
				'Text': 'Je suis...',
				'Validation': function (input) {
					const decodedinput = input.toLowerCase();
					return decodedinput.includes("ria") || (
							decodedinput.includes("action") && decodedinput.includes("inflammatoire")
							&& decodedinput.includes("aigu")
						);
				},
				'Warning': 'Il ne se passe rien... Peut être faut-il essayer autre chose (mot complet, abbréviation ?)'
			}
		},
		"L'accès a tout de suite été débloqué !! Vous avez accès à tous les salons. Vous partez donc sur le votre.",
		"Vous envoyez avec empressement votre message d'aide.",
		"En relisant vos message, vous relisez de superbes souvenirs",
		"«bonjour les petit loups», « bonne nuit dormez bien »",
		{
			'Input': {
				'Text': "Comme vous n'avez rien à faire, vous décidez de...",
				'Validation': function (input) {
					const decodedinput = input.toLowerCase();
					return decodedinput.includes("dor");
				},
				'Warning': "Cela ne vous mênera à rien. Choisissez autre chose (c'est un verbe en rapport avec votre message  « bonne nuit dormez bien »)"
			}
		},
		"Vous décidez de dormir.",
		'show scene black with fadeIn',
		"...",
		" ",
		"...",
		'show scene discord2 with fadeIn',
		"Vous vous réveillez une heure plus tard par le son d'une notification, et vous lisez la conversation : ",
		"<em>Edwing#2374 (16:37) :</em> Je pars vous aider !",
		"<em>Nass#6784 (17:03) :</em> Madame, il y a un petit problème...",
		"<em>Nass#6784 (17:03) :</em> Edwing s'est fait «hagar» par les plantes !!",
		"<em>Nass#6784 (17:05) :</em> Je pars à votre rescousse !",
		"y Oh...",
		"<span style='background-color: orange;'>Nass#6784 (17:20) : @{{player.name}} C'est bon !! C'est ok</span>",
		'show scene fond-7 with fadeIn',
		"La lumière fit alors son apparition. Vous vous empressez de donner des nouvelles et remerciez ceux qui vous ont aidé !!",
		"Une fois la vue rétablie, vous voyez alors apparaitre un autre message, invisible s'il n'y avais pas eu de lumière...",
		"Vous lisez le message...",
		"«Le faux plafond»",
		"y Ah ! La cachette traditionnelle d'antisèches. Comment n'ais-je pas pu y penser.",
		"Vous ouvrez le faux plafond, récupérez <span style='text-decoration: line-through;'>la boite</span> le vieux carton low cost",
		"Vous ouvrez le carton.",
		"show message pack",
		"Vous ouvrez la porte. Enfin, la vie liiiibreee !!!!",
		"show scene white with fadeIn",
		"...",
		"Mais vous êtes en face d'une autre porte",
		"Vous lisez l'écriteau",
		"«Coronavirus : plus que jamais, pour sauver des vies, restez chez vous.»",
		"Mais pas d'inquiétude, tout n'est pas perdu.",
		"Vous venez de finir le jeu !",
		"Vous n'êtes en réalité pas enfermé, mais devant votre écran.",
		"Merci, et Joyeux anniversaire !!",
		"end"
	]
});
