function addUser(){
player1 = document.getElementById("input1").value;
player2 = document.getElementById("input2").value;

localStorage.setItem("Player 1", player1);
localStorage.setItem("Player 2", player2);

window.location = "game.html";

}