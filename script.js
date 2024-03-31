let contain = document.querySelector("#container");
let reset = document.querySelector(".reset");

let newGrid = (size) => {
	contain.innerHTML = "";
	let gridSize = size * size;

	for (let i = 0; i < gridSize; i++) {
		let div = document.createElement("div");
		div.style.height = `calc(500px / ${size} - 2px)`;
		div.style.width = `calc(500px / ${size} - 2px)`;
		div.style.border = `1px solid #ddd`;

		div.addEventListener("mouseover", (e) => {
			e.target.style.background = "black";
		});
		contain.append(div);
	}
};

reset.addEventListener("click", (e) => {
	newGrid(16);
});

let chSize = document.querySelector(".changeSize");

chSize.addEventListener("click", () => {
	const size = prompt("What dimensions would you like?");
	if (!isNaN(size) && size < 100) {
		newGrid(size);
	} else {
		alert("Please enter a valid size less than 100.");
	}
});

newGrid(16);
