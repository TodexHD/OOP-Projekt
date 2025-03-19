b1 = new Ball(300, 300, 50, "elsaglaze.jpg", "#FF000000", 0, 0);
b2 = new Ball(800, 300, 100, "loris.jpeg", "#FF000000");
b3 = new Ball(400, 200, 50, "", "blue", 0, 0);
ar = new Arrow(b3.x, b3.y, -20);
f1 = new Floor(0, ymax - 20, 2000, 20, "red");
f2 = new Floor(0, 0, 2000, 30, "red");
w1 = new Wall(0, 0, 30, ymax, "red");
w1 = new Wall(xmax, 0, 30, ymax, "red");
e1 = new Enemy(200, 200, 50, "", "red", 2, 0);
b1.draw();
b2.draw();
b3.draw();
e1.draw();
ar.draw();

setInterval(tick, 20);

function tick() {
    clearScreen();
    //b1.fall();
    //b2.move();
    b3.fall();
    f1.draw();
    f2.draw();
    w1.draw();
    e1.fall();
    ar.rise();
}

var keypress_w = false;
var keypress_a = false;
var keypress_s = false;
var keypress_d = false;
var keypress_space = false;

window.addEventListener("keydown", keypressed);
window.addEventListener("keyup", keyup);

function keypressed(event) {
    if (event.key === "w") {
        keypress_w = true;
        ar.spawn();
    }
    if (event.key === "a") {
        keypress_a = true;
    }
    if (event.key === "s") {
        keypress_s = true;
    }
    if (event.key === "d") {
        keypress_d = true;
    }
    if (event.key === " ") {
        keypress_space = true;
        console.log("Hello");
    }
}

function keyup(event) {
    if (event.key === "w") {
        // keypress_w = false;
    }
    if (event.key === "a") {
        keypress_a = false;
    }
    if (event.key === "s") {
        keypress_s = false;
    }
    if (event.key === "d") {
        keypress_d = false;
    }
    if (event.key === " ") {
        keypress_space = false;
    }
}
