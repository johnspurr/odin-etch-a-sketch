
const DEFAULT_SIZE = 16;
const MIN_SIZE = 1;
const MAX_SIZE = 100;

const grid = document.getElementById('grid-container');
const gridSize = document.getElementById('grid-size');
const reset = document.getElementById('reset');

var currentColor = "black";

function makeGrid(size=DEFAULT_SIZE) {
    const rows = [];
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.className = 'grid-cell';
            cell.addEventListener('mouseover', function (e) {
                this.className = `grid-cell ${currentColor}`;
            })
            row.appendChild(cell);
        }
        rows.push(row);
    }
    grid.replaceChildren(...rows);
    return grid;
}

function makeGridFromInput() {
    let size = gridSize.value;
    if (size < 1) {
        size = 16;
    } else if (size === NaN) {
        size = DEFAULT_SIZE;
    }
    gridSize.value = size;
    console.log(size);
    makeGrid(size);
}

document.querySelectorAll('.color').forEach(element => {
    element.addEventListener('click', () => {
        currentColor = element.id;
    })
});

reset.addEventListener('click', () => makeGridFromInput());

gridSize.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        makeGridFromInput();
        gridSize.blur();
    }
    else {
        let size = gridSize.value;
        if (size < 0) gridSize.value = 0;
        if (size > 100) gridSize.value = 100;
    }
});

makeGridFromInput();