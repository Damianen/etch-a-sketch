
const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < 16; i++)
{
    const row = document.createElement('div');
    row.classList.add("row");

    for (let j = 0; j < 16; j++)
    {
        const cell = document.createElement('div');
        cell.classList.add("cell");
        row.appendChild(cell);
    }

    gridContainer.appendChild(row);
}

document.addEventListener('mousemove', () => 
{
    const cells = document.querySelectorAll(".cell");
    for (const cell of cells)
    {
        if (cell.matches(".cell:hover"))
        {
            cell.classList.add('dark-bg');
        }
    }
})

const resetBtn = document.querySelector('#reset');
resetBtn.onclick = () => 
{
    const cells = document.querySelectorAll(".dark-bg");
    cells.forEach((cell) => 
    {
        cell.classList.remove('dark-bg');
    })
}

const newGridBtn = document.querySelector('#newGrid');
newGridBtn.onclick = () =>
{
    const rows = document.querySelectorAll('.row');
    rows.forEach((row) => {row.remove();});
    let newRows = 0;
    while (newRows < 1 || newRows > 100)
    {
        newRows = Number(prompt("How many new rows and columns do you want: (pick between 1 and 100)"));
    }

    for (let i = 0; i < newRows; i++)
    {
        const row = document.createElement('div');
        row.classList.add("row");

        for (let j = 0; j < newRows; j++)
        {
            const cell = document.createElement('div');
            cell.classList.add("cell");
            row.appendChild(cell);
        }

        gridContainer.appendChild(row);
    }
}