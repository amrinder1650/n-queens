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

  // var recursiveHelper = function(numRooks = 0) {
  //   if (numRooks === 4) {
  //     solutionCount++;
  //   }
  //   for (var i = 0; i < n; i++) {
  //     var sum = 0;
  //     for (var j = 0; j < n; j++) {
  //       sum += this.get(i)[j];
  //     }
  //     if (sum === 1) {

  //     }
  //   }

  // };

  //Goes Left to right
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
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
