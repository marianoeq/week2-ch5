'use strict';
let alive = 1;
let dead = 0;
let deathCellsInContactAlive = 0;
let aliveCellsInContactAlive = 0;
function checkCellsHorizontally(cellsBoard, currentCell) {
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
function checkDown(cellsBoard, idx, currentCell) {
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
function checkUp(cellsBoard, idx, currentCell) {
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
  let cellsBoard = [
    [alive, alive, alive],
    [dead, dead, dead],
    [dead, dead, dead],
  ];
  let currentCell = null;
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
