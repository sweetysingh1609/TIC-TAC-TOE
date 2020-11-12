var turn = "X";
var winner = null;

function startGame() {
  setMessage(turn + " gets started.");
}

function setMessage(msg) {
  document.getElementById("message").innerText = msg;
}

function nextMove(cell) {
  if (winner != null) {
    setMessage(winner + " already won the game.");
  } else if (document.getElementById(cell).innerText == "") {
    document.getElementById(cell).innerText = turn;
    switchTurn();
  } else {
    alert("That cell is already filled.");
  }
}

function switchTurn() {
  if (checkForWinner(turn)) {
    setMessage("Congratulations, " + turn + "You win!");
    winner = turn;
  } else if (turn == "X") {
    turn = "O";
    setMessage(turn + " 's turn. ");
  } else {
    turn = "X";
    setMessage(turn + " 's turn. ");
  }
}

function checkForWinner(move) {
  var ans = false;
  if (
    checkRow(1, 2, 3, move) ||
    checkRow(4, 5, 6, move) ||
    checkRow(7, 8, 9, move) ||
    checkRow(1, 4, 7, move) ||
    checkRow(2, 5, 8, move) ||
    checkRow(3, 6, 9, move) ||
    checkRow(1, 5, 9, move) ||
    checkRow(3, 5, 7, move)
  ) {
    ans = true;
  }

  return ans;
}

function checkRow(a, b, c, move) {
  var ans = false;
  if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
    ans = true;
  }
  return ans;
}

function getBox(number) {
  return document.getElementById("cell" + number).innerText;
}
