function back_page(){
    window.location="activity1.html"
}
function get_score(){
    Score=localStorage.getItem("points")
    document.getElementById("score").innerHTML="score:" + Score;
}