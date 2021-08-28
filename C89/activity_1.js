Score=0;
function update_score(){
 Score=Score+1;
 document.getElementById("score").innerHTML=Score;

}
function save_score(){
    localStorage.setItem("points",Score)
}
function next_page(){
    window.location="activity2.html"
}