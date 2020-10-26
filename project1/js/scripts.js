document.getElementById("sidebar").onmouseover = function() {mouseOverbar()};
document.getElementById("sidebar").onmouseout= function() {mouseLeavebar()};
function myLinks() {
    var link1 = document.getElementsByClassName("link");
    var i;
    for (i = 0; i <link1.length; i++){
    link1[i].style.borderColor = "black";
}
}
function myLinks2(){
    var link2 = document.getElementsByClassName("link");
    var i;
    for (i = 0; i <link2.length; i++){
    link2[i].style.borderColor = "red";
    }
}
function mouseOverbar(){
    document.getElementById("sidebar").style.borderColor = "gold";
}
function mouseLeavebar(){
    document.getElementById("sidebar").style.borderColor = "red";
}
