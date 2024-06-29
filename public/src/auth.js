import { auth } from "./firebase";

const authDiv = document.getElementById("auth");
const recipeFormDiv = document.getElementById("recipe-form");
const recipeRouletteDiv = document.getElementById("recipe-roulette");

auth.onAuthStateChanged((user) => {
	if (user) {
		authDiv.innerHTML = `<button id="logout" class="btn">Logout</button>`;
		recipeFormDiv.classList.remove("hidden");
		recipeRouletteDiv.classList.remove("hidden");

		document.getElementById("logout").addEventListener("click", () => {
			auth.signOut();
		});
	} else {
		authDiv.innerHTML = `
      <input id="email" type="email" placeholder="Email" class="input">
      <input id="password" type="password" placeholder="Password" class="input">
      <button id="signup" class="btn">Sign Up</button>
      <button id="login" class="btn">Login</button>
    `;
		recipeFormDiv.classList.add("hidden");
		recipeRouletteDiv.classList.add("hidden");

		document.getElementById("signup").addEventListener("click", () => {
			const email = document.getElementById("email").value;
			const password = document.getElementById("password").value;
			auth.createUserWithEmailAndPassword(email, password).catch(console.error);
		});

		document.getElementById("login").addEventListener("click", () => {
			const email = document.getElementById("email").value;
			const password = document.getElementById("password").value;
			auth.signInWithEmailAndPassword(email, password).catch(console.error);
		});
	}
});
