alert("Good luck cuty pie! 🎲");

const GRID_SIZE = 10;
const MINE_FREQUENCY = 0.15;


const minesweeper = document.querySelector('#minesweeper');
for (let i = 0; i < GRID_SIZE; i += 1) {
  const row = document.createElement('tr');
  row.dataset.row = i;
  for (let j = 0; j < GRID_SIZE; j += 1) {
    row.insertAdjacentHTML('beforeend', `<td class="unopened" data-column="${j}"></td>`);
  }
  minesweeper.append(row);
}


document.querySelectorAll('td').forEach((td) => {
  td.dataset.column = td.cellIndex;
  td.dataset.row = td.parentElement.rowIndex;

  if (Math.random() <= MINE_FREQUENCY) {
    td.classList.add('has-mine');
  }

  td.addEventListener('click', openOnClick);
  td.addEventListener('contextmenu', flagOnClick);
});
