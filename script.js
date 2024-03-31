let contain = document.querySelector("#container");
let reset = document.querySelector(".reset");
let chSize = document.querySelector(".changeSize");
let isRandomColor = false;

let newGrid = (size) => {
	contain.innerHTML = "";
	let gridSize = size * size;

	for (let i = 0; i < gridSize; i++) {
		let div = document.createElement("div");
		div.style.height = `calc(500px / ${size} - 2px)`;
		div.style.width = `calc(500px / ${size} - 2px)`;
		div.style.border = `1px solid #ddd`;

		div.addEventListener("mouseover", (e) => {
			if (isRandomColor) {
				e.target.style.background = getRandomColor();
			} else {
				e.target.style.background = "black";
			}
		});
		contain.append(div);
	}
};

reset.addEventListener("click", (e) => {
	newGrid(16);
});

chSize.addEventListener("click", () => {
	const size = prompt("What dimensions would you like?");
	if (!isNaN(size) && size < 100) {
		newGrid(size);
	} else {
		alert("Please enter a valid size less than 100.");
	}
});

function getRandomColor() {
	let letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

let toggleColor = document.querySelector(".ranColor");

toggleColor.addEventListener("click", () => {
	isRandomColor = !isRandomColor;
});

newGrid(16);
