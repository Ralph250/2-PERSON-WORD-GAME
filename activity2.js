function show_score(){
var score_value = localStorage.getItem("ScoreKey");
document.getElementById("show").innerHTML = "Score:" + score_value;
}

function back(){
window.location = "activity_1.html";
}