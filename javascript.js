const container = document.querySelector(".container");
const resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", () => {
  const squaresCount = prompt("Enter the number of the squares (1-100)");
  if (squaresCount > 100 || squaresCount < 1) {
    alert("Out of range");
    return;
  }
  container.innerHTML = "";
  resetGrid(squaresCount);
});

function resetGrid(gridSize = 16) {
  for (let i = 0; i < gridSize; i++) {
    const innerContainer = document.createElement("div");
    innerContainer.setAttribute(
      "style",
      "display: flex; justify-content: space-between; flex-grow: 1;"
    );
    for (let i = 0; i < gridSize; i++) {
      const square = document.createElement("div");
      square.setAttribute(
        "style",
        "background-color: lightgray; border: solid; border-color: white; border-width: 1px; flex-grow: 1"
      );
      square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = getRandomColor();
      });
      innerContainer.appendChild(square);
    }
    container.appendChild(innerContainer);
  }
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

resetGrid();
