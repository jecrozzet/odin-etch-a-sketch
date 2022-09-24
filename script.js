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
                if(e.buttons === 1) sketch(e.target);
            });
            gridCol.addEventListener("mousedown", function (e) {
                if(e.buttons === 1) sketch(e.target);
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

function sketch(target){
    switch (sketchMode) {
        case 1:
            target.classList.add("sketched");
            break;
        case 2:
            target.classList.remove("sketched");
            break;
        case 3:
            target.classList.toggle("sketched");
            break;
    }
}

let gridSize = 16;
let sketchMode = 1;
createGrid(gridSize);

const sizeButton = document.querySelector("#size-button");
sizeButton.addEventListener("click", function () {
    gridSize = getGridSize();

    if (gridSize) {
        removeGrid();
        createGrid(gridSize);
    }
});

const modeButton = document.querySelector("#mode-button");
modeButton.addEventListener("click", function () {
    sketchMode++;
    if (sketchMode > 3) sketchMode = 1;

    switch (sketchMode) {
        case 1:
            modeButton.textContent = "Sketch \r\n Mode";
            break;
        case 2:
            modeButton.textContent = "Eraser \r\n Mode";
            break
        case 3:
            modeButton.textContent = "Toggle \r\n Mode";
            break;
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
        gridCol.classList.remove("sketched");
    });
});