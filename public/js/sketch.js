var x, y;
x = mouseX;
y = mouseY;

function setup(){
    var cns = createCanvas(windowWidth, windowHeight/4);
}

function draw(){
    stroke(221,229,126);
    line(x, y, mouseX, mouseY);
    x = mouseX;
    y = mouseY;
}

function mouseReleased(){
    loop();
}

function mousePressed(){
    noLoop();
    var cns = createCanvas(windowWidth, windowHeight/4);
}
