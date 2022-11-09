const container = document.querySelector('.container');
const option = document.querySelector('.grid-choice');
const button = document.querySelector('.button');

let gridSize = 16;
option.addEventListener('change', () => {
    gridSize = parseInt(option.options[option.selectedIndex].value);
})

button.addEventListener('click', createGrid);

function randomColor() {
    return Math.floor(Math.random()*16777215).toString(16);
}
function createGrid() {
    container.innerHTML = '';

    container.classList.remove('template-4x4');
    container.classList.remove('template-8x8');
    container.classList.remove('template-16x16');

    switch (gridSize) {
        case 16:
            desiredClass = 'cell-4x4';
            gridTemplate = 'template-4x4';
            break;
        case 64:
            desiredClass = 'cell-8x8';
            gridTemplate = 'template-8x8';
            break;
        case 256:
            desiredClass = 'cell-16x16';
            gridTemplate = 'template-16x16';
            break;
    }

    container.classList.add(gridTemplate);

    for (let i = 0; i < gridSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.classList.add(desiredClass);
        container.appendChild(cell);
    }

    const cells = document.querySelectorAll('.cell');

    cells.forEach(cell => cell.addEventListener('mouseover', () => {
        let color = "#";
        color += randomColor();
        cell.style.backgroundColor = color;
    }))
}

