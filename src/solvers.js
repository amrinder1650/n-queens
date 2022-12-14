/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = [];
  for (var i = 0; i < n; i++) {
    solution[i] = [];
  }
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      solution[i][j] = 0;
    }
  }

  for (var d = 0; d < n; d++) {
    solution[d][d] = 1;
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
//Recursion:
//
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;

  var board = new Board({n: n});

  //Decision Tree
  var rec = function(row) {
    if (row === n - 1) {
      solutionCount++;
      return;
    }
    for (var i = 0; i < n; i++) {
      // debugger;
      board.togglePiece(row, i);
      if (!board.hasAnyRooksConflicts()) {
        rec(row + 1);
      }
      board.togglePiece(row, i);
    }
  };

  rec(0);


  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  // var solution = [];
  // for (var i = 0; i < n; i++) {
  //   solution[i] = [];
  // }
  // for (var i = 0; i < n; i++) {
  //   for (var j = 0; j < n; j++) {
  //     solution[i][j] = 0;
  //   }
  // }
  // var haventFoundOne = true;

  // var numQueensPlaced = 0;
  // startingCol = 0;
  // while (haventFoundOne) {
  //   for (var i = 0; i < n; i++) {
  //     for (var col = startingCol; col < n + startingCol; col++) {
  //       var co = col;
  //       if (col >= n) {
  //         co -= n;
  //       }
  //       solution.togglePiece(i, co);
  //       numQueensPlaced++;
  //       if (solution.hasAnyQueensConflicts()) {
  //         solution.togglePiece(i, co);
  //         numQueensPlaced--;
  //       }
  //     }
  //   }
  //   if (numQueensPlaced === n) {
  //     haventFoundOne = false;
  //   }
  //   startingCol++;
  // }

  var board = new Board({n: n});
  var boardLayout = board.rows();
  var solution;

  if (n === 0 || n === 2 || n === 3) {
    return boardLayout;
  }

  var rec = function(row) {
    if (row === n) {
      solution = boardLayout;
      return;
    }
    for (let i = 0; i < n; i++) {
      boardLayout[row][i] = 1;
      if (!board.hasAnyQueensConflicts()) {
        rec(row + 1);
      }
      if (solution !== undefined) {
        break;
      }
      boardLayout[row][i] = 0;
    }
  };
  rec(0);

  /*
  HEREHEREHERE
  var solution = new Board({n: n});
  console.log('hereherehere', solution);
  if (n === 0) {
    return [];
  }
  if (n === 1) {
    return [[1]];
  }
  if (n === 2 || n === 3) {
    return;
  }

  var oneQueens = function(row, col, numQueens = 0) {
    if (row === n ) {
      if (numQueens === n) {
        return;
      } else {
        return oneQueens(0, col + 1);
      }
    }
    for (var i = col; i < n + col; i++) {
      var co = i;
      if (co >= n) {
        co -= n;
      }
      solution.togglePiece(row, co);
      if (!solution.hasAnyQueensConflicts()) {
        oneQueens(row + 1, 0, numQueens + 1);
      }
      solution.togglePiece(row, co);
    }
  };
  oneQueens(0, 0);
  */

  /*

  var haventFoundOne = true;
  var numQueensPlaced = 0;
  var startingCol = 0;
  while (haventFoundOne) {
    for (var i = 0; i < n; i++) {
      for (var col = startingCol; col < n + startingCol; col++) {
        var co = col;
        if (col >= n) {
          co -= n;
        }
        solution.togglePiece(i, co);
        numQueensPlaced++;
        if (solution.hasAnyQueensConflicts()) {
          solution.togglePiece(i, co);
          numQueensPlaced--;
        }
      }
    }
    debugger;
    if (numQueensPlaced === n) {
      haventFoundOne = false;
    } else {
      solution = new Board({n: n});
    }
    startingCol++;
  }
  */
  /*

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      solution.togglePiece(i, j);

      if (solution.hasAnyQueensConflicts()) {
        solution.togglePiece(i, j);
      }
    }
  }

  */

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;

  var board = new Board({n: n});

  if (n === 2 || n === 3) {
    return 0;
  }

  //Decision Tree
  var rec = function(row) {
    if (row === n) {
      solutionCount++;
      return;
    }
    for (var i = 0; i < n; i++) {
      // debugger;
      board.togglePiece(row, i);
      if (!board.hasAnyQueensConflicts()) {
        rec(row + 1);
      }
      //debugger;
      board.togglePiece(row, i);
    }
  };

  rec(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
