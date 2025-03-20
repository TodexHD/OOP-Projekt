b3 = new Ball(xmax * 0.25, ymax, 0.03 * xmax, "", "black", xmax * 0.003, 0);
ar = new Arrow(b3.x, b3.y, -20);
f1 = new Floor(0, ymax * 0.98, xmax, 0.015 * xmax, "red");
f2 = new Floor(0, 0, xmax, 0.01 * xmax, "red");
w1 = new Wall(0, 0, 0.015 * xmax, ymax, "red");
w2 = new Wall(xmax, 0, -0.015 * xmax, ymax, "red");
e1 = new Enemy(xmax * 0.7, ymax * 0.3, xmax * 0.1, "", 0, xmax * 0.0025, 0);
h1 = new Shrink(100, 100, 400, 200, "green");
b3.draw();
e1.draw();
ar.draw();

setInterval(tick, 20);

function tick() {
    clearScreen();
    b3.fall();
    f1.draw();
    f2.draw();
    w1.draw();
    w2.draw();
    e1.fall();
    ar.rise();
    h1.draw();
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
