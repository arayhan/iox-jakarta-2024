import { database } from "./firebase";

const recipeRouletteDiv = document.getElementById("recipe-roulette");

recipeRouletteDiv.innerHTML = `
  <button id="get-recipe" class="btn">Get a Random Recipe</button>
  <div id="random-recipe" class="mt-4"></div>
`;

document.getElementById("get-recipe").addEventListener("click", () => {
	database
		.ref("recipes")
		.once("value")
		.then((snapshot) => {
			const recipes = snapshot.val();
			const recipeIds = Object.keys(recipes);
			const randomIndex = Math.floor(Math.random() * recipeIds.length);
			const randomRecipe = recipes[recipeIds[randomIndex]];

			document.getElementById("random-recipe").innerHTML = `
      <h2 class="text-2xl font-bold">${randomRecipe.title}</h2>
      <p>${randomRecipe.description}</p>
      <p><strong>Ingredients:</strong> ${randomRecipe.ingredients.join(
				", "
			)}</p>
      <p><strong>Instructions:</strong> ${randomRecipe.instructions}</p>
    `;
		})
		.catch(console.error);
});
