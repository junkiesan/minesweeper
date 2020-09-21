alert("Good luck cuty pie! 🎲");

const GRID_SIZE = 10;
const MINE_FREQUENCY = 0.15;

document.querySelectorAll('td').forEach((td) => {
  td.dataset.column = td.cellIndex;
  td.dataset.row = td.parentElement.rowIndex;

  if (Math.random() <= MINE_FREQUENCY) {
    td.classList.add('has-mine');
  }

  td.addEventListener('click', openOnClick);
  td.addEventListener('contextmenu', flagOnClick);
});
