import Button from "@/components/Button";
import Input from "@/components/Input";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center gap-8 min-h-screen p-24 text-center">
			<header>
				<h1>RECIPE ROULETTE</h1>

				<div className="flex flex-col items-center">
					<h2>What's for dinner?</h2>
					<p>Let us help you decide!</p>
				</div>
			</header>

			<div className="flex flex-col items-center">
				<h2>How it works</h2>
				<p>Click the button below to get a random recipe idea.</p>
			</div>

			<div className="flex flex-col items-center">
				<h2>Ready to get started?</h2>
				<Button>Get a recipe</Button>
			</div>

			<div className="flex flex-col items-center">
				<h2>Have a recipe to share?</h2>
				<p>Click the button below to add your recipe to our database.</p>
				<Input placeholder="Recipe name" />
				<Button>Add a recipe</Button>
			</div>
		</main>
	);
}
