let alive: number = 1;
let dead: number = 0;

let deathCellsInContactAlive: number = 0;
let aliveCellsInContactAlive: number = 0;

function checkCellsHorizontally(
  cellsBoard: number[][],
  currentCell: number | null
) {
  for (let i = 0; i < cellsBoard.length; i++) {
    for (let j = 0; j < cellsBoard.length; j++) {
      if (cellsBoard[i][j] === alive) {
        currentCell = alive;
        if (
          currentCell === cellsBoard[i][j + 1] &&
          cellsBoard[i][j + 1] !== undefined
        )
          aliveCellsInContactAlive++;
        if (
          currentCell === cellsBoard[i][j - 1] &&
          cellsBoard[i][j - 1] !== undefined
        )
          aliveCellsInContactAlive++;
      }

      if (cellsBoard[i][j] === dead) {
        currentCell = dead;
        if (
          currentCell !== cellsBoard[i][j + 1] &&
          cellsBoard[i][j + 1] !== undefined
        )
          deathCellsInContactAlive++;
        if (
          currentCell !== cellsBoard[i][j - 1] &&
          cellsBoard[i][j - 1] !== undefined
        )
          deathCellsInContactAlive++;
      }
      if (currentCell === alive) {
        if (i < cellsBoard.length - 1) checkDown(cellsBoard, i, currentCell);
        if (i > 0) checkUp(cellsBoard, i, currentCell);
      }
      if (currentCell === dead) {
        if (i < cellsBoard.length - 1) checkDown(cellsBoard, i, currentCell);
        if (i > 0) checkUp(cellsBoard, i, currentCell);
      }
    }
  }
}

function checkDown(cellsBoard: number[][], idx: number, currentCell: number) {
  for (let i = idx; i < cellsBoard.length; i++) {
    for (let j = 0; j < cellsBoard.length; j++) {
      if (currentCell === alive) {
        if (
          currentCell === cellsBoard[i][j + 1] &&
          cellsBoard[i][j + 1] !== undefined
        )
          aliveCellsInContactAlive++;
        if (
          currentCell === cellsBoard[i][j - 1] &&
          cellsBoard[i][j - 1] !== undefined
        )
          aliveCellsInContactAlive++;

        if (currentCell === dead) {
          if (
            currentCell !== cellsBoard[i][j + 1] &&
            cellsBoard[i][j + 1] !== undefined
          )
            deathCellsInContactAlive++;
          if (
            currentCell !== cellsBoard[i][j - 1] &&
            cellsBoard[i][j - 1] !== undefined
          )
            deathCellsInContactAlive++;
        }
      }
    }
  }
}

function checkUp(cellsBoard: number[][], idx: number, currentCell: number) {
  for (let i = idx; i < cellsBoard.length; i++) {
    for (let j = 0; j < cellsBoard.length; j++) {
      if (currentCell === alive) {
        if (
          currentCell === cellsBoard[i][j + 1] &&
          cellsBoard[i][j + 1] !== undefined
        )
          aliveCellsInContactAlive++;
        if (
          currentCell === cellsBoard[i][j - 1] &&
          cellsBoard[i][j - 1] !== undefined
        )
          aliveCellsInContactAlive++;
      }

      if (currentCell === dead) {
        if (
          currentCell !== cellsBoard[i][j + 1] &&
          cellsBoard[i][j + 1] !== undefined
        )
          deathCellsInContactAlive++;
        if (
          currentCell !== cellsBoard[i][j - 1] &&
          cellsBoard[i][j - 1] !== undefined
        )
          deathCellsInContactAlive++;
      }
    }
  }
}

function gameOfLife() {
  let cellsBoard: number[][] = [
    [alive, alive, alive],
    [dead, dead, dead],
    [dead, dead, dead],
  ];

  let currentCell: number | null = null;
  checkCellsHorizontally(cellsBoard, currentCell);
  if (deathCellsInContactAlive === 3) {
    currentCell = alive;
  }
  if (aliveCellsInContactAlive <= 1) {
    currentCell = dead;
  }
  if (aliveCellsInContactAlive === 2 || aliveCellsInContactAlive === 3) {
    currentCell;
  }
  if (aliveCellsInContactAlive >= 4) {
    currentCell = dead;
  }
}
