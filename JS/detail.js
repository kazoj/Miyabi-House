const urlSearchParams = new URLSearchParams(window.location.search);
const id = urlSearchParams.get("id");
const recette = recettesDB.find((recette) => recette.id === parseInt(id));

const nameElement = document.getElementById("nom");
nameElement.textContent = recette.name;

const categoryElement = document.getElementById("categorie");
categoryElement.textContent = recette.category;

const countryElement = document.getElementById("pays");
countryElement.textContent = recette.country;

const imageElement = document.getElementById("image");
imageElement.src = `../image/recette${id}.png`;

const durationElement = document.getElementById("temps");
durationElement.textContent = recette.duration;

const ingredientsList = document.getElementById("ingredients");
recette.ingredients.forEach((ingredient) => {
  const ingredientElement = document.createElement("li");
  ingredientElement.textContent = ingredient;
  ingredientsList.appendChild(ingredientElement);
});

const instructionsList = document.getElementById("instructions");
recette.instructions.forEach((instruction) => {
  const instructionElement = document.createElement("li");
  instructionElement.textContent = instruction;
  instructionsList.appendChild(instructionElement);
});

const commentsList = document.getElementById("commentaires");

recette.comments.forEach((comment) => {
  const commentElement = document.createElement("li");
  const ratingElement = document.createElement("span");
  ratingElement.textContent = comment.rating;
  ratingElement.classList.add("rating");
  const userElement = document.createElement("span");
  userElement.textContent = comment.user + " : ";
  userElement.classList.add("user");
  const contentElement = document.createElement("span");
  contentElement.textContent = comment.content;
  contentElement.classList.add("content");
  commentElement.appendChild(ratingElement);
  commentElement.appendChild(userElement);
  commentElement.appendChild(contentElement);
  commentsList.appendChild(commentElement);
});
