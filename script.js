function createGrid() {
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-container");

    for (let row = 0; row < 16; row++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");

        for (let col = 0; col <16; col++) {
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

createGrid();