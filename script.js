const grid = document.getElementById('grid-container');
const gridSize = document.getElementById('grid-size');
const reset = document.getElementById('reset');

function makeGrid(size=16) {
    const rows = [];
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            cell.addEventListener('mouseover', function (e) {
                this.classList.add("black");
            })
            row.appendChild(cell);
        }
        rows.push(row);
        console.log(row);
    }
    grid.replaceChildren(...rows);
    return grid;
}

function makeGridFromInput() {
    const size = document.getElementById('grid-size');
    makeGrid(size.value);
}

reset.addEventListener('click', () => makeGridFromInput());

gridSize.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') makeGridFromInput()
});

makeGridFromInput();