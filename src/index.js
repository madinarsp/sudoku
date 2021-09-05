module.exports = function solveSudoku(matrix) {

  //the solution is based on dfs (assign value, continue; if stuck, then backtrack) algorithm


  //constant values
  const matrixSize = 9;
  const squareSize = 3;


  //find next empty cell
  function nextEmptyCell(matrix) {
    for(let row = 0; row < matrixSize; row++) {
      for(let col = 0; col < matrixSize; col++) {
        if(matrix[row][col] == 0) {
          let cellCoordinates = [row, col];
          return cellCoordinates;
        }
      }
    }
    return null;
  }


  //check whether potential value is valid for that cell
  function isValidValue(candidate, coordinates, matrix) {
    //const [r, c] = pos;

    //check that value is not occupied in that row
    for(let row = 0; row < matrixSize; row++) {
      if(matrix[row][coordinates[1]] == candidate && row != coordinates[0]) {
        return false;
      }
    }

    //check that value is not occupied in that column
    for(let col = 0; col < matrixSize; col++) {
      if(matrix[coordinates[0]][col] == candidate && col != coordinates[1]) {
        return false;
      }
    }

    //check that value is not occupied in that square
    const squareRow = Math.floor(coordinates[0] / squareSize) * squareSize;
    const squareCol = Math.floor(coordinates[1] / squareSize) * squareSize;

    for(let row = squareRow; row < squareRow + squareSize; row++) {
      for(let col = squareCol; col < squareCol + squareSize; col++) {
        if(matrix[row][col] == candidate && row != coordinates[0] && col != coordinates[1]) {
          return false;
        }
      }
    }



    return true;
  }


  function solve() {
    const currCell = nextEmptyCell(matrix);

    if(currCell == null) {
      return true;
    }

    for(let i = 1; i <= matrixSize; i++) {

      if(isValidValue(i, currCell, matrix)) {
        matrix[currCell[0]][currCell[1]] = i;

        if(solve()) {
          return true;
        }
        matrix[currCell[0]][currCell[1]] = 0;
      }
    }
    return false;
  }

  solve();
  return matrix;

}

