//Create the canvas
var canvas = document.createElement("canvas");
canvas.width = 800;
canvas.height = 600;
canvas.style.border = "2px solid black";
var context = canvas.getContext("2d");
document.body.appendChild(canvas);
//Background
var showBackground = false;
var backgroundImage = new Image();
backgroundImage.onload = function () {
    showBackground = true;
};
backgroundImage.src = "leaf.jpg";
//Bug image
var showBug = false;
var bugImage = new Image();
bugImage.onload = function () {
    showBug = true;
};
bugImage.src = "bug.png";
//Game objects
var score = 0;
var bug = {
    x: 0,
    y: 0,
    delay: 2000
}
//Mouse control
canvas.onmousedown = function (e) {
    var gameArea = canvas.getBoundingClientRect();
    var x = e.clientX - gameArea.left;
    var y = e.clientY - gameArea.top;

    if (x <= bug.x + 32
        && x >= bug.x - 32
        && y <= bug.y + 32
        && y >= bug.y - 32)
    {
        reset();
        bug.delay -= 100;
        if (bug.delay > 1500) {
            score++;
        }
        if (bug.delay == 1500)
        {
            score++;
            alert("Good job! Keep going!");
        }
        if (bug.delay < 1500 && bug.delay > 0)
        {
            score++;
        }
        else if (bug.delay == 0) {
            alert("Congratulation!");
            score = 0;
            bug.delay = 2000;
        }  
        then = Date.now()
    }
}
//Reset when catches
var reset = function () {
    bug.x = 32 + Math.random() * (canvas.width - 64);
    bug.y = 32 + Math.random() * (canvas.height - 64);
}
//Draw everything on canvas
var render = function () {
    if (showBackground) {
        context.drawImage(backgroundImage,0,0);
    }
    if (showBug) {
        context.drawImage(bugImage, bug.x, bug.y);
    }
    var scoreResult = document.getElementById("scoreResult");
    var result = "Score:" + score;
    scoreResult.innerHTML = result;
}
//Reset button
function resetScore() {
    score = 0;
    bug.delay = 2000;
}
function resetSpeed() {
    bug.delay = 2000;
}
scoreResult = score.value;
//The main game loop
var main = function () {
    var now = Date.now();
    var delta = now - then;
    if (delta > bug.delay) {
        reset();
        then = now;
    }
    render();
    requestAnimationFrame(main);
}
//Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
//Let's play
var then = Date.now();
reset();
main();
//Event listener
var rScoreBtn = document.getElementById("resetScore");
if (rScoreBtn.addEventListener){
	rScoreBtn.addEventListener("click", resetScore, false);
} else if (rScoreBtn.attachEvent){
	rScoreBtn.attachEvent("onclick", resetScore);
}
var rSpeedBtn = document.getElementById("resetSpeed");
if (rSpeedBtn.addEventListener){
	rSpeedBtn.addEventListener("click", resetSpeed, false);
} else if (rSpeedBtn.attachEvent){
	rSpeedBtn.attachEvent("onclick", resetSpeed);
}