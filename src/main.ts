let alive: number = 1;
let dead: number = 0;

let cells: number[][] = [
  [0, 1, 0],
  [0, 1, 0],
  [1, 1, 1],
];
console.table(cells);

// if dead cell is in contact with one or two alive cell, it keeps dead.
// if dead cell is in contact with 3 alive cells, it turns alive.
// if dead cell is in contact with more than 3 alive cells, it keeps dead.
