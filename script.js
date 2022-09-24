function createGrid(gridSize) {
    const containerSize = 640;
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-container");

    for (let row = 0; row < gridSize; row++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");

        for (let col = 0; col < gridSize; col++) {
            const gridCol = document.createElement("div");
            gridCol.style.width = String((containerSize / gridSize) - 2) + "px";
            gridCol.style.height = String((containerSize / gridSize) - 2) + "px";
            gridCol.classList.add("grid-col", "grid-on");

            gridCol.addEventListener("mouseover", function (e) {
                if(e.buttons === 1) {
                    const gridOver = e.target;
                    gridOver.classList.add("painted");
                }
            });
            gridCol.addEventListener("mousedown", function (e) {
                if(e.buttons === 1) {
                    const gridOver = e.target;
                    gridOver.classList.add("painted");
                }
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
    let gridSize = Number(prompt("Input Grid Size (1 - 100)", "16"));

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

let gridSize = 16;
createGrid(gridSize);

const changeButton = document.querySelector("#change-button");
changeButton.addEventListener("click", function () {
    gridSize = getGridSize();

    if (gridSize) {
        removeGrid();
        createGrid(gridSize);
    }
});

const gridLineButton = document.querySelector("#grid-line-button");
gridLineButton.addEventListener("click", function () {
    const gridCols = document.querySelectorAll(".grid-col");
    gridCols.forEach(gridCol => {
        gridCol.classList.toggle("grid-on");
        gridCol.classList.toggle("grid-off");
    });
});

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", function () {
    const gridCols = document.querySelectorAll(".grid-col");
    gridCols.forEach(gridCol => { 
        gridCol.classList.remove("painted");
    });
});