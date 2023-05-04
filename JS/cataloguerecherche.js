const searchBar = document.getElementById("search-bar");
const categoryFilter = document.getElementById("category-filter");
const recipeCards = document.querySelectorAll("#recettes-container .card");

function applyFilters() {
  const searchTerm = searchBar.value.toLowerCase();
  const selectedCategory = categoryFilter.value.toLowerCase();

  recipeCards.forEach(function (card) {
    const recipeName = card.querySelector("h2").textContent.toLowerCase();
    const category = card
      .querySelector("p:first-of-type")
      .textContent.toLowerCase();

    const nameMatches = recipeName.includes(searchTerm);
    const categoryMatches =
      selectedCategory === "" || category === selectedCategory;

    if (nameMatches && categoryMatches) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

searchBar.addEventListener("keyup", applyFilters);
categoryFilter.addEventListener("change", applyFilters);

//random button

const randomButton = document.getElementById("random-button");
randomButton.addEventListener("click", function () {
  const randomRecipeCards = getRandomRecipeCards(3);
  recipeCards.forEach(function (card) {
    card.style.display = "none";
  });
  randomRecipeCards.forEach(function (card) {
    card.style.display = "block";
  });
});
function getRandomRecipeCards(numCards) {
  const recipeCardsArray = Array.from(recipeCards);
  const randomRecipeCards = [];
  for (let i = 0; i < numCards; i++) {
    const randomIndex = Math.floor(Math.random() * recipeCardsArray.length);
    randomRecipeCards.push(recipeCardsArray[randomIndex]);
    recipeCardsArray.splice(randomIndex, 1);
  }

  return randomRecipeCards;
}
