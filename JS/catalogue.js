let recettesDB = [
  {
    id: 1,
    name: "Tamago Kake Gohan",
    category: "Petit déjeuner",
    country: "Japon",
    duration: "10 minutes",
    ingredients: [
      "1 tasse de riz japonais",
      "1 œuf frais",
      "1 cuillère à soupe de sauce soja",
      "1 cuillère à soupe de mirin",
      "1 cuillère à café de dashi en poudre",
      "1 cuillère à soupe de ciboule hachée",
    ],
    instructions: [
      "Cuire le riz selon les instructions du paquet.",
      "Dans un bol, battre l'œuf jusqu'à ce qu'il soit bien mélangé.",
      "Ajouter la sauce soja, le mirin et le dashi en poudre dans le bol avec l'œuf et bien mélanger.",
      "Ajouter le riz cuit chaud dans le bol et mélanger avec l'œuf jusqu'à ce qu'il soit bien enrobé.",
      "Ajouter la ciboule hachée et mélanger légèrement.",
      "Servir immédiatement et déguster !",
    ],
    comments: [
      {
        user: "Yuko",
        rating: 4.5,
        content: "J'adore cette recette, c'est mon petit déjeuner préféré !",
      },
      {
        user: "Jean",
        rating: 4.0,
        content: "Facile à préparer et délicieux, merci pour la recette !",
      },
    ],
  },

  {
    id: 2,
    name: "Gyudon",
    category: "Déjeuner",
    country: "Japon",
    duration: "45 minutes",
    ingredients: [
      "500g de viande de bœuf tranchée",
      "2 tasses de riz blanc cuit",
      "2 oignons",
      "3 gousses d'ail",
      "1 cuillère à soupe d'huile de sésame",
      "2 cuillères à soupe de mirin",
      "2 cuillères à soupe de sauce soja",
      "2 tasses de dashi (bouillon de poisson)",
      "4 œufs",
      "4 tiges de ciboule, tranchées finement",
      "Poivre noir moulu",
    ],
    instructions: [
      "Dans une poêle, faire revenir l'ail et les oignons dans l'huile de sésame jusqu'à ce qu'ils soient tendres.",
      "Ajouter la viande de bœuf et faire sauter jusqu'à ce qu'elle soit dorée.",
      "Ajouter le mirin et la sauce soja et laisser mijoter pendant 5 minutes.",
      "Ajouter le dashi et laisser mijoter pendant 15 minutes.",
      "Dans une poêle séparée, faire cuire les œufs en remuant pour obtenir des œufs brouillés.",
      "Répartir le riz cuit dans 4 bols et ajouter la viande de bœuf et la sauce sur le dessus.",
      "Garnir chaque bol avec des œufs brouillés, des tranches de ciboule et du poivre noir moulu.",
    ],
    comments: [
      {
        user: "Takumi",
        rating: 4.7,
        content:
          "Ce gyudon est délicieux et facile à préparer, j'en referai certainement !",
      },
      {
        user: "Sakura",
        rating: 4.3,
        content:
          "J'aime beaucoup la combinaison de la viande, du riz et des œufs, merci pour cette recette !",
      },
    ],
  },
  {
    id: 3,
    name: "Okonomiyaki",
    category: "Dîner",
    country: "Japon",
    duration: "30 minutes",
    ingredients: [
      "1 tasse de farine",
      "1/2 tasse de dashi (bouillon de poisson)",
      "2 oeufs",
      "1/4 chou coupé finement",
      "3 ciboules coupées en diagonale",
      "1/2 tasse de crevettes décortiquées",
      "1/2 tasse de bacon en dés",
      "1/4 tasse de katsuobushi (flocons de bonite séchée)",
      "1/4 tasse de mayonnaise",
      "1/4 tasse de sauce okonomiyaki",
      "huile pour la cuisson",
      "sauce Worcestershire",
      "mayonnaise",
      "algues séchées",
    ],
    instructions: [
      "Dans un grand bol, mélangez la farine, le dashi et les oeufs jusqu'à obtenir une pâte lisse.",
      "Ajoutez le chou, les ciboules, les crevettes, le bacon et le katsuobushi à la pâte et mélangez bien.",
      "Chauffez une poêle à feu moyen-élevé et ajoutez un peu d'huile.",
      "Versez une louche de la pâte sur la poêle et étalez-la en un cercle d'environ 1 cm d'épaisseur.",
      "Faites cuire le okonomiyaki pendant environ 3-4 minutes de chaque côté, jusqu'à ce qu'il soit doré et croustillant.",
      "Répétez l'opération avec le reste de la pâte, en ajoutant de l'huile au besoin.",
      "Dans un petit bol, mélangez la sauce okonomiyaki et la mayonnaise.",
      "Badigeonnez la sauce sur le dessus de chaque okonomiyaki.",
      "Saupoudrez d'algues séchées et servez chaud avec de la sauce Worcestershire et de la mayonnaise.",
    ],
    comments: [
      {
        user: "Yoshi",
        rating: 4.8,
        content:
          "Ce okonomiyaki est incroyable ! J'adore la combinaison de saveurs et la texture croustillante.",
      },
      {
        user: "Aiko",
        rating: 4.5,
        content:
          "J'ai utilisé du porc au lieu du bacon et c'était délicieux. Merci pour cette recette facile à suivre !",
      },
    ],
  },
  {
    id: 4,
    name: "Katsu Curry",
    category: "Dîner",
    country: "Japon",
    duration: "1 heure",
    ingredients: [
      "4 escalopes de porc",
      "100 g de farine",
      "3 oeufs",
      "150 g de chapelure japonaise (Panko)",
      "huile de friture",
      "2 oignons",
      "2 carottes",
      "2 pommes de terre",
      "800 ml d'eau",
      "4 cuillères à soupe de curry japonais en pâte",
      "sel",
      "poivre",
    ],
    instructions: [
      "Pelez les oignons, les carottes et les pommes de terre, puis coupez-les en dés.",
      "Dans une grande casserole, faites bouillir l'eau et ajoutez les légumes. Laissez cuire pendant 15 minutes.",
      "Pendant ce temps, préparez les escalopes de porc. Salez et poivrez les deux côtés de chaque escalope, puis passez-les dans la farine, les oeufs battus et la chapelure japonaise.",
      "Faites chauffer l'huile de friture dans une poêle à feu moyen et faites frire les escalopes de porc jusqu'à ce qu'elles soient dorées et croustillantes. Égouttez-les sur du papier absorbant et réservez.",
      "Une fois les légumes cuits, ajoutez la pâte de curry japonais dans la casserole et mélangez bien.",
      "Laissez cuire pendant 5 minutes supplémentaires, puis servez le curry japonais avec les escalopes de porc frites sur le dessus.",
    ],
    comments: [
      {
        user: "Yumi",
        rating: 4.7,
        content:
          "Le katsu curry est un plat japonais classique et cette recette est très facile à suivre !",
      },
      {
        user: "Hiro",
        rating: 4.2,
        content:
          "J'ai ajouté des champignons à cette recette et c'était encore meilleur !",
      },
    ],
  },
  {
    id: 5,
    name: "Tempura",
    category: "Dîner",
    country: "Japon",
    duration: "1 heure",
    ingredients: [
      "1 tasse de farine",
      "1 oeuf",
      "1 tasse d'eau glacée",
      "1/2 cuillère à café de sel",
      "huile végétale",
      "légumes ou fruits de mer de votre choix (crevettes, courgettes, aubergines, champignons, etc.)",
      "sauce tempura (sauce soja, dashi, mirin, sucre)",
    ],
    instructions: [
      "Dans un grand bol, mélangez la farine, l'oeuf, l'eau glacée et le sel jusqu'à ce que la pâte soit bien lisse.",
      "Chauffez l'huile végétale dans une grande casserole ou une friteuse jusqu'à ce qu'elle atteigne une température de 180 degrés Celsius.",
      "Trempez les légumes ou les fruits de mer dans la pâte, en veillant à ce qu'ils soient bien enrobés.",
      "Plongez-les ensuite dans l'huile chaude et laissez-les frire pendant environ 2 à 3 minutes, jusqu'à ce qu'ils soient dorés et croustillants.",
      "Retirez-les de l'huile avec une écumoire et placez-les sur du papier absorbant pour enlever l'excès d'huile.",
      "Servez immédiatement avec la sauce tempura.",
    ],
    comments: [
      {
        user: "Taro",
        rating: 4.5,
        content:
          "Cette recette de tempura est excellente, j'ai utilisé des crevettes et des champignons et c'était délicieux !",
      },
      {
        user: "Yuko",
        rating: 4.0,
        content:
          "J'ai ajouté un peu de gingembre râpé à la sauce tempura et c'était une bonne idée, merci pour la recette !",
      },
    ],
  },
  {
    id: 6,
    name: "Sushi",
    category: "Dîner",
    country: "Japon",
    duration: "2 heures",
    ingredients: [
      "3 tasses de riz à sushi",
      "3 tasses d'eau",
      "1/3 tasse de vinaigre de riz",
      "3 cuillères à soupe de sucre",
      "1 1/2 cuillère à soupe de sel",
      "wasabi",
      "sauce soja",
      "feuilles d'algues nori",
      "garnitures de votre choix (avocat, saumon, thon, concombre, omelette japonaise, etc.)",
    ],
    instructions: [
      "Rincer le riz à sushi à l'eau froide jusqu'à ce que l'eau soit claire. Égouttez le riz et laissez-le reposer pendant 30 minutes.",
      "Placez le riz et l'eau dans une casserole à fond épais et portez à ébullition à feu vif.",
      "Réduisez le feu à doux et couvrez. Laissez mijoter pendant 15 minutes.",
      "Retirez du feu et laissez reposer pendant 10 minutes.",
      "Mélangez le vinaigre de riz, le sucre et le sel dans une petite casserole et faites chauffer jusqu'à ce que le sucre et le sel soient dissous.",
      "Versez le mélange de vinaigre de riz sur le riz et remuez délicatement avec une cuillère en bois pour l'enrober de vinaigre.",
      "Laissez le riz refroidir à température ambiante.",
      "Placez une feuille d'algue nori sur une natte de bambou. Humidifiez légèrement vos mains et prenez une poignée de riz, en la pressant légèrement pour former une couche uniforme sur la feuille de nori.",
      "Ajoutez les garnitures de votre choix sur le dessus du riz.",
      "Enroulez la feuille de nori en utilisant la natte de bambou pour former un rouleau de sushi compact.",
      "Répétez le processus pour créer autant de rouleaux de sushi que vous le souhaitez.",
      "Servez avec de la sauce soja et du wasabi.",
    ],
    comments: [
      {
        user: "Mari",
        rating: 5.0,
        content:
          "Cette recette de sushi est fantastique ! Les instructions sont claires et faciles à suivre, et le résultat est délicieux. Merci !",
      },
      {
        user: "Kenji",
        rating: 4.5,
        content:
          "J'ai ajouté des tranches d'avocat et de concombre à mes rouleaux de sushi et c'était délicieux. Je referai cette recette à coup sûr !",
      },
    ],
  },
  {
    id: 7,
    name: "Onigiri",
    category: "Déjeuner",
    country: "Japon",
    duration: "30 minutes",
    ingredients: [
      "2 tasses de riz à sushi cuit",
      "1 cuillère à soupe de vinaigre de riz",
      "1 cuillère à soupe de sucre",
      "1/2 cuillère à café de sel",
      "12 crevettes décortiquées et déveinées",
      "Wasabi (facultatif)",
      "Feuilles de nori coupées en petits rectangles",
    ],
    instructions: [
      "Dans un grand bol, mélanger le riz cuit avec le vinaigre de riz, le sucre et le sel. Bien mélanger pour que le riz soit bien enrobé.",
      "Prendre une petite quantité de riz et le presser fermement dans la paume de la main pour former un petit disque.",
      "Ajouter une crevette et une petite quantité de wasabi (facultatif) au centre du disque de riz.",
      "Recouvrir la crevette avec une autre petite quantité de riz et presser fermement pour former un triangle ou une boule.",
      "Envelopper le triangle ou la boule de riz avec une feuille de nori coupée en petit rectangle.",
      "Répéter le processus avec le reste du riz et des crevettes.",
      "Les onigiris sont prêts à être servis !",
    ],
    comments: [
      {
        user: "Yoshi",
        rating: 4.8,
        content:
          "Cette recette d'onigiri aux crevettes est superbe, merci ! J'ai utilisé du crabe à la place des crevettes et c'était tout aussi bon !",
      },
      {
        user: "Miyuki",
        rating: 4.5,
        content:
          "J'adore les onigiris et cette recette est facile à suivre. J'ai ajouté des graines de sésame grillées pour un peu de croquant.",
      },
    ],
  },
  {
    id: 8,
    name: "Ramen",
    category: "Déjeuner",
    country: "Japon",
    duration: "1 heure",
    ingredients: [
      "4 tranches de porc à griller",
      "4 oeufs",
      "4 portions de nouilles ramen",
      "6 tasses de bouillon de poulet",
      "1/4 tasse de sauce soja",
      "2 cuillères à soupe de mirin",
      "1 cuillère à soupe d'huile de sésame",
      "4 gousses d'ail, hachées",
      "1 morceau de gingembre frais de 2 pouces, pelé et râpé",
      "4 tasses de chou vert émincé",
      "4 oignons verts, émincés",
      "Sel",
      "Poivre",
    ],
    instructions: [
      "Préchauffer le four à 220°C (425°F).",
      "Assaisonner le porc de sel et de poivre et le faire griller au four pendant 25 à 30 minutes, jusqu'à ce qu'il soit bien cuit.",
      "Pendant ce temps, faire bouillir de l'eau dans une casserole et y faire cuire les oeufs pendant 6 minutes pour qu'ils soient à point. Les refroidir sous l'eau froide, les écaler et les couper en deux.",
      "Dans une grande casserole, chauffer l'huile de sésame à feu moyen et y faire revenir l'ail et le gingembre pendant environ 1 minute.",
      "Ajouter le bouillon de poulet, la sauce soja et le mirin et porter à ébullition.",
      "Ajouter les nouilles ramen et les faire cuire pendant environ 2 minutes, en remuant de temps en temps.",
      "Ajouter le chou émincé et les oignons verts et continuer de faire cuire pendant environ 2 minutes, jusqu'à ce que les nouilles soient al dente et le chou légèrement ramolli.",
      "Répartir le ramen dans 4 bols, garnir chaque bol avec 1 tranche de porc et 2 moitiés d'oeufs. Servir chaud.",
    ],
    comments: [
      {
        user: "Sophie",
        rating: 4.7,
        content:
          "Cette recette de ramen est facile à suivre et le résultat est excellent. Merci pour le partage !",
      },
      {
        user: "Pierre",
        rating: 4.2,
        content:
          "J'ai ajouté du maïs en grains à cette recette et c'était délicieux. Merci pour l'idée !",
      },
    ],
  },
  {
    id: 9,
    name: "Mochi",
    category: "Petit déjeuner",
    country: "Japon",
    duration: "2 heures",
    ingredients: [
      "1 tasse de farine de riz gluant",
      "1/4 tasse de sucre en poudre",
      "1/2 tasse d'eau",
      "1/2 cuillère à café d'extrait de vanille",
      "1/4 tasse de fécule de pomme de terre",
      "Colorants alimentaires (facultatif)",
      "Garniture au choix :",
      "Pâte de haricots rouges sucrée",
      "Poudre de thé vert",
      "Noix de coco râpée",
    ],
    instructions: [
      "Mélanger la farine de riz gluant et le sucre en poudre dans un grand bol.",
      "Dans une petite casserole, mélanger l'eau et l'extrait de vanille et porter à ébullition.",
      "Verser le mélange d'eau chaude sur le mélange de farine de riz gluant et mélanger jusqu'à ce qu'il soit homogène.",
      "Diviser la pâte en plusieurs portions et ajouter des colorants alimentaires si désiré.",
      "Dans un autre bol, mélanger la fécule de pomme de terre et de l'eau jusqu'à obtention d'une pâte lisse.",
      "Prendre une portion de pâte de riz gluant colorée et la rouler en boule. La rouler ensuite dans la pâte de fécule de pomme de terre pour la rendre moins collante.",
      "Répéter jusqu'à épuisement de la pâte.",
      "Pour servir, couper les mochis en petits morceaux et les garnir de pâte de haricots rouges sucrée, de poudre de thé vert ou de noix de coco râpée.",
      "Servir à température ambiante.",
    ],
    comments: [
      {
        user: "Marie",
        rating: 4.5,
        content:
          "J'adore les mochis et cette recette est facile à suivre, merci !",
      },
      {
        user: "Satoshi",
        rating: 5,
        content:
          "Je suis japonais et je peux confirmer que cette recette est très authentique et délicieuse. Merci de l'avoir partagée!",
      },
    ],
  },
  {
    id: 10,
    name: "Soba",
    category: "Déjeuner",
    country: "Japon",
    duration: "30 minutes",
    ingredients: [
      "Soba (200g)",
      "Crevettes décortiquées (200g)",
      "Sauce soja (4 cuillères à soupe)",
      "Vinaigre de riz (2 cuillères à soupe)",
      "Mirin (2 cuillères à soupe)",
      "Gingembre frais (1 cuillère à soupe, râpé)",
      "Ail (2 gousses, écrasé)",
      "Huile de sésame (2 cuillères à soupe)",
      "Oignon vert (2 pièces, coupé en diagonale)",
    ],
    instructions: [
      "Cuire les soba selon les instructions sur l'emballage.",
      "Dans une poêle, faire chauffer l'huile de sésame à feu moyen.",
      "Ajouter l'ail et le gingembre râpé et faire revenir pendant environ 1 minute.",
      "Ajouter les crevettes et faire revenir jusqu'à ce qu'elles soient cuites, environ 3 à 4 minutes.",
      "Ajouter la sauce soja, le vinaigre de riz et le mirin dans la poêle et mélanger avec les crevettes.",
      "Ajouter les soba cuits dans la poêle et mélanger avec la sauce.",
      "Saupoudrer d'oignons verts coupés en diagonale avant de servir.",
    ],
    comments: [
      {
        user: "Fatima",
        rating: 5,
        comment: "J'ai adoré cette recette ! Les saveurs sont incroyables.",
      },
      {
        user: "Ali",
        rating: 4,
        comment:
          "Très bon, mais j'ai dû ajouter un peu plus de sauce pour mon goût.",
      },
    ],
  },
];

const recettesContainer = document.getElementById("recettes-container");

// Parcourir la base de données et afficher chaque recette
recettesDB.forEach((recette, index) => {
  // Créer les éléments HTML pour chaque recette
  const recetteElement = document.createElement("div");
  const nomElement = document.createElement("h2");
  const categorieElement = document.createElement("p");
  const origineElement = document.createElement("p");
  const dureeElement = document.createElement("p");
  const noteElement = document.createElement("p");
  const imageElement = document.createElement("img");
  const buttonElement = document.createElement("button");
  const idElement = document.createElement("p");

  // Ajouter les informations de la recette dans les éléments HTML
  nomElement.textContent = recette.name;
  categorieElement.textContent = `Catégorie: ${recette.category}`;
  origineElement.textContent = `Origine: ${recette.country}`;
  dureeElement.textContent = `Durée: ${recette.duration}`;
  noteElement.textContent = `Note: ${calculerNoteMoyenne(recette.comments)}`;
  imageElement.src = `../image/recette${index + 1}.png`;
  buttonElement.textContent = "En savoir plus";
  idElement.textContent = recette.id;

  // Ajouter les classes aux éléments HTML
  recetteElement.classList.add("card");
  buttonElement.classList.add("card-button");
  recetteElement.classList.add(`recette-${index + 1}`);
  idElement.classList.add("ID");

  // Ajouter les éléments HTML à la div principale
  recetteElement.appendChild(imageElement);
  recetteElement.appendChild(nomElement);
  recetteElement.appendChild(categorieElement);
  recetteElement.appendChild(origineElement);
  recetteElement.appendChild(dureeElement);
  recetteElement.appendChild(noteElement);
  recetteElement.appendChild(buttonElement);
  recetteElement.appendChild(idElement);
  recettesContainer.appendChild(recetteElement);
});

// Fonction pour calculer la note moyenne d'une recette
function calculerNoteMoyenne(comments) {
  let sommeNotes = 0;
  comments.forEach((comment) => {
    sommeNotes += comment.rating;
  });
  const noteMoyenne = sommeNotes / comments.length;
  return noteMoyenne.toFixed(1);
}
//
// Selectionner tous les boutons
const buttons = document.querySelectorAll(".card-button");

// Ajouter un gestionnaire d'événements click à chaque bouton
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Récupérer l'ID de la recette à partir de l'élément p avec la classe ID
    const id = button.parentElement.querySelector(".ID").textContent;
    // Rediriger vers la page details avec l'ID dans la query string
    window.location.href = `../html/detail.html?id=${id}`;
  });
});