const tileDimension = 40;
let columns = Math.floor(window.innerWidth / tileDimension);
let rows = Math.floor(window.innerHeight / tileDimension);
const wrapper = document.getElementById('wrapper');

const colors = ['#fff275', '#ff8c42', '#ff3c38', '#40e0d0', '#007fff'];
let count = 0;

// click event for tiles
const handleClick = (index) => {
  count += 1;
  anime({
    targets: '.tile',
    backgroundColor: colors[count % (colors.length + 1)],
    delay: anime.stagger(15, { grid: [columns, rows], from: index }),
  });
};

// func to create a single tile div
const createTile = (index) => {
  const tile = document.createElement('div');
  tile.classList.add('tile');
  tile.onclick = () => handleClick(index);
  return tile;
};

// to create all tiles and set col and rows css property
const createAllTiles = (quantity) => {
  Array.from(Array(quantity)).map((tile, index) => {
    wrapper.appendChild(createTile(index));
  });
  wrapper.style.setProperty('--columns', columns);
  wrapper.style.setProperty('--rows', rows);
};

// creating initial tiles
createAllTiles(columns * rows);

// when resizing window
const createGrid = () => {
  wrapper.innerHTML = '';

  columns = Math.floor(window.innerWidth / tileDimension);
  rows = Math.floor(window.innerHeight / tileDimension);

  wrapper.style.setProperty('--columns', columns);
  wrapper.style.setProperty('--rows', rows);
  createAllTiles(columns * rows);
};

window.onresize = createGrid;
