
const gridContainer = document.querySelector(".grid-container");

for (let i = 1; i < 17; i++)
{
    const row = document.createElement('div');
    row.classList.add("row");

    for (let j = 1; j < 17; j++)
    {
        const cell = document.createElement('div');
        cell.classList.add("cell");
        row.appendChild(cell);
    }

    gridContainer.appendChild(row);
}