
// BUSINESS LOGIC
function Player(mark) {
  this.mark = mark;
  this.spaces = [];
};

var winningCombinations = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // <!--row 1 wining pissibilities-->
  [1, 4, 6], [2, 5, 8], [3, 6, 9], // <!--row 2 wining pissibilities-->
  [1, 5, 9], [3, 5, 6]]; // <!--diagonal wining pissibilities-->



// for (i = 0; i < winningCombinations.length; i++){
//   if (newGame)
// }
// row 1 = [1, 2, 3];
// row 2 = [4, 5, 6];
// row 3 = [6, 8, 9];

Player.prototype.addSpace = function(space) {
  this.spaces.push(space);
}
function Game(playerOne, playerTwo) {
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
  this.currentPlayer = playerOne;
}
 Game.prototype.switchPlayer = function () {
  if (this.currentPlayer === this.playerOne) {
    this.currentPlayer = this.playerTwo;
  } else {
    this.currentPlayer = this.playerOne;
  }
}
// USER INTERFACE LOGIC
$(document).ready(function() {
  var playerOne = new Player("X");
  var playerTwo = new Player("O");
  var newGame = new Game(playerOne,playerTwo);
  turns = 0;

  console.log("starting player is " + newGame.currentPlayer.mark);

  if(turns % 2 === 0){
    $("#gameBoard td").on('click',function() {
      var positionId = $(this).attr('id');
      var display = $(this).text(newGame.currentPlayer.mark);
      playerOne.spaces.push(positionId);
      console.log(playerOne.spaces);
      newGame.switchPlayer();

      turns++;
      console.log("after click, currentPlayer is " + newGame.currentPlayer.mark);
    });

  } else {
    $("#gameBoard td").one('click',function() {
      var positionId = $(this).attr('id');
      var display = $(this).text(newGame.currentPlayer.mark);
      playerTwo.spaces.push(positionId);
      console.log(playerTwo.spaces);
      newGame.switchPlayer();

      console.log("after click, currentPlayer is " + newGame.currentPlayer.mark);
      turns++;
    });


  }

  $(".newGame").click(function(){
    $("td").empty("");

  });

  var win = 0;
  console.log(playerOne.spaces);
  for(i = 0; i < playerOne.spaces.length; i++){
    if (playerOne.spaces[i] === winningCombinations[0]){
      win = win + 1;
    }
    if (win === 3){
      alert("You Win!")
    }
  }

});


// $(document).ready(function() {
//   winningCombinations = [
//     [1, 2, 3], [4, 5, 6], [7, 8, 9], // <!--row 1 wining pissibilities-->
//     [1, 5, 9], [3, 5, 7], [1, 4, 7], // <!--row 2 wining pissibilities-->
//     [3, 6, 9], [2, 4, 8]]; // <!--diagonal wining pissibilities-->
//
//
//   playerTracker1 = [];
//   playerTracker2 = [];
//
//   turns = 0;
//   player1win = 0;
//   player2win = 0;
//
//   $(".square").click(function(){
//     turns++;
//     if (turns % 2 == 0) {
//       var id = $(this).attr("id");
//       playerTracker1.push(id);
//       $(this).text("X")
//       for(i = 0; i < winningCombinations.length; i++){
//         for(j =0; j < winningCombinations[j]; j++){
//           for(k = 0; k < playerTracker2.length; k++){
//             if(playerTracker1[k] === winningCombinations[j]){
//               player1win++;
//             }
//             if(win === 3){
//               alert("You Win!");
//             }
//           }
//         }
//       }
//     } else {
//       var id = $(this).attr("id");
//       playerTracker2.push(id);
//       $(this).text("O");
//
//       for(i = 0; i < winningCombinations.length; i++){
//
//         for(j =0; j < winningCombinations[j]; j++){
//           for(k = 0; k < playerTracker2.length; k++){
//             if(playerTracker2[k] === winningCombinations[j]){
//
//               player2win++;
//             }
//             if(win === 3){
//               alert("You Win!");
//             }
//           }
//         }
//       }
//     }
//
//
//
//
//   });
//
//
//
//
//
//
// });
