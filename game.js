player_1name = localStorage.getItem("Player 1");
player_2name = localStorage.getItem("Player 2");

player_1score = 0;
player_2score = 0;

document.getElementById("player_1name").innerHTML = player_1name + ":";
document.getElementById("player_2name").innerHTML = player_2name + ":";

document.getElementById("player_1score").innerHTML = player_1score;
document.getElementById("player_2score").innerHTML = player_2score;

document.getElementById("player_question").innerHTML = "Question Turn- " + player_1name;
document.getElementById("player_answer").innerHTML = "Answer Turn- " + player_2name;

function send(){
get_word = document.getElementById("word").value;
word = get_word.toLowerCase();
console.log("The LowerCase word is " + word);

charAt1 = word.charAt(1);
console.log(charAt1);

index_middle = Math.floor(word.length/2);
charAt2 = word.charAt(index_middle);
console.log(charAt2);

index_last = word.length - 1;
charAt3 = word.charAt(index_last);
console.log(charAt3);

remove_charAt1 = word.replace(charAt1, "_");
remove_charAt2 = remove_charAt1.replace(charAt2, "_");
remove_charAt3 = remove_charAt2.replace(charAt3, "_");
console.log(remove_charAt3);

question_answer = "<h4 id = 'word_display'>  Q.  "  + remove_charAt3 + "</h4>";
input_box = "<br><br>Answer: <input type = 'text' id = 'input_box'>";
check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'>Check</button>"

row = question_answer + input_box + check_button;

document.getElementById("output").innerHTML = (row);
document.getElementById("word").value = "";

}


question_turn = "Player 1";
answer_turn = "Player 2";


function check(){
get_answer = document.getElementById("input_box").value;
answer = get_answer.toLowerCase();
console.log("answer = " + answer);

if (answer == word){

 if(answer_turn == "Player 1"){
player_1score = player_1score + 1;
document.getElementById("player_1score").innerHTML = player_1score;
 } 
else {
player_2score = player_2score + 1;
document.getElementById("player_2score").innerHTML = player_2score;
}



}

if (question_turn=="Player 1"){
question_turn = "Player 2";
document.getElementById("player_question").innerHTML = "Question Turn-" + player_2name;
}
else{
question_turn = "Player 1";
document.getElementById("player_question").innerHTML = "Question Turn-" + player_1name;
}


if (answer_turn=="Player 2"){
answer_turn = "Player 1";
document.getElementById("player_answer").innerHTML = "Answer Turn-" + player_1name;
}
else{
answer_turn = "Player 2";
document.getElementById("player_answer").innerHTML = "Answer Turn-" + player_2name;
}
document.getElementById("output").innerHTML = "";
}