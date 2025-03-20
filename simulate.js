b3 = new Ball(xmax * 0.25, ymax, 0.03 * xmax, "", "black", xmax * 0.003, 0);
ar = new Arrow(b3.x, b3.y, -20);
f1 = new Floor(0, ymax * 0.98, xmax, 0.015 * xmax, "red");
f2 = new Floor(0, 0, xmax, 0.01 * xmax, "red");
w1 = new Wall(0, 0, 0.015 * xmax, ymax, "red");
w2 = new Wall(xmax, 0, -0.015 * xmax, ymax, "red");
e1 = new Enemy(xmax * 0.7, ymax * 0.3, xmax * 0.1, "", 0, xmax * 0.0025, 0);
h1 = new Shrink(xmax * 0.03, ymax * 0.05, xmax * 0.25, ymax * 0.03, "green");
i1 = new Icon(xmax * 0.03, ymax * 0.09, xmax * 0.0275, "shrink.png", "shrink_use.png");
i2 = new Icon(xmax * 0.095, ymax * 0.09, xmax * 0.0275, "ballrun.png", "ballrun_use.png");
i3 = new Icon(xmax * 0.16, ymax * 0.09, xmax * 0.0275, "balljump.png", "balljump_use.png");
i4 = new Icon(xmax * 0.225, ymax * 0.09, xmax * 0.0275, "ballshoot.png", "ballshoot_use.png");
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
    i1.drawShrink();
    i2.drawRun();
    i3.drawJump();
    i4.drawShoot();
}

var keypress_w = false;
var keypress_a = false;
var keypress_s = false;
var keypress_d = false;
var keypress_space = false;
var keypress_shift = false;

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
    }
    if (event.key === "Shift") {
        keypress_shift = true;
    }
}

function keyup(event) {
    if (event.key === "w") {
        keypress_w = false;
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
    if (event.key === "Shift") {
        keypress_shift = false;
    }
}
