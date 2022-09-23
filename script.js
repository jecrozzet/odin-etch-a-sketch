function createGrid(gridSize) {
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-container");

    for (let row = 0; row < gridSize; row++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");

        for (let col = 0; col < gridSize; col++) {
            const gridCol = document.createElement("div");
            gridCol.classList.add("grid-col");
            gridCol.addEventListener("mouseover", function (e) {
                const gridHover = e.target;
                gridHover.classList.add("hover");
            });

            gridRow.appendChild(gridCol);
        }

        gridContainer.appendChild(gridRow);
    }

    document.body.appendChild(gridContainer);
}

function removeGrid() {
    const gridContainer = document.querySelector(".grid-container");
    document.body.removeChild(gridContainer);
}

function getGridSize() {
    const gridSize = Number(prompt("Input Grid Size (1 - 100)", "16"));

    if (isNaN(gridSize)) {
        alert("Please Input a Number!");
        return;
    }

    if (gridSize < 1) {
        gridSize = 1;
    } else if (gridSize > 100) {
        gridSize = 100;
    }

    return gridSize;
}

createGrid(16);

const changeButton = document.querySelector("#change-button");
changeButton.addEventListener("click", function () {
    const gridSize = getGridSize();

    if (gridSize) {
        removeGrid();
        createGrid(gridSize);
    }
});