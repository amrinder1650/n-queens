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
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var metricies = [];
  //sets a new starting point
  for (var r = 0; r < n; r++) {
    for (var c = 0; c < n; c++) {
      var currBoard = new Board({n: n});
      console.log('currBoard', currBoard);
      //need to put a skip in there
      currBoard.togglePiece(r, c);
      for (var row = r; row < n + r; row++) {
        var ro = row;
        for (var col = c; col < n + c; col++) {
          var co = col;
          if (ro >= n) {
            ro -= n;
          }
          if (co >= n) {
            co -= n;
          }
          currBoard.togglePiece(ro, co);
          if (currBoard.hasAnyRooksConflicts()) {
            currBoard.togglePiece(ro, co);
          }
          //if()
        }
      }
      //Check to see if it matches anything in metricies, if it does not, then we append it to metricies.
      var dupe = false;
      for (var i = 0; i < metricies.length; i++) {
        if (JSON.stringify(currBoard) === metricies[i]) {
          dupe = true;
        }
      }
      if (dupe === false) {
        metricies.push(JSON.stringify(currBoard));
        solutionCount++;
      }
    }
  }

  /*
  for (var r = 0; r < n; r++) {
    for (var c = 0; c < n; c++) {
      var currBoard = new Board({n: n});
      console.log('currBoard', currBoard);
      //need to put a skip in there
      currBoard.togglePiece(r, c);
      for (var row = r; row < n + r; row++) {
        var ro = row;
        for (var col = c; col < n + c; col++) {
          var co = col;
          if (ro >= n) {
            ro -= n;
          }
          if (co >= n) {
            co -= n;
          }
          currBoard.togglePiece(ro, co);
          if (currBoard.hasAnyRooksConflicts()) {
            currBoard.togglePiece(ro, co);
          }
          //if()
        }
      }
      //Check to see if it matches anything in metricies, if it does not, then we append it to metricies.
      var dupe = false;
      for (var i = 0; i < metricies.length; i++) {
        if (JSON.stringify(currBoard) === metricies[i]) {
          dupe = true;
        }
      }
      if (dupe === false) {
        metricies.push(JSON.stringify(currBoard));
        solutionCount++;
      }
    }
  }
  */

  if (n > 1) {
    solutionCount = n * this.countNRooksSolutions(n - 1);
  }



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
