var score = 0;

function update(){
score = score + 1;
document.getElementById("score").innerHTML = "Score :" + score;
}

function save(){
localStorage.setItem("ScoreKey", score);
}

function next(){
    window.location = "activity2.html";
}