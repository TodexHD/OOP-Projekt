b3 = new Ball(xmax * 0.25, ymax, 0.03 * xmax, "", "black", xmax * 0.003, 0);
ar = new Arrow(b3.x, b3.y, -20);
f1 = new Floor(0, ymax * 0.98, xmax, 0.015 * xmax, "#5e0217");
f2 = new Floor(0, 0, xmax, 0.01 * xmax, "#5e0217");
w1 = new Wall(0, 0, 0.015 * xmax, ymax, "#5e0217");
w2 = new Wall(xmax, 0, -0.015 * xmax, ymax, "#5e0217");
e1 = new Enemy(xmax * 0.7, ymax * 0.3, xmax * 0.1, "", 0, xmax * 0.0025, 0);
h1 = new Shrink(xmax * 0.03, ymax * 0.05, xmax * 0.25, ymax * 0.03, "green");
i1 = new Icon(xmax * 0.03, ymax * 0.09, xmax * 0.0275, "shrink.png", "shrink_use.png");
i2 = new Icon(xmax * 0.095, ymax * 0.09, xmax * 0.0275, "ballrun.png", "ballrun_use.png");
i3 = new Icon(xmax * 0.16, ymax * 0.09, xmax * 0.0275, "balljump.png", "balljump_use.png");
i4 = new Icon(xmax * 0.225, ymax * 0.09, xmax * 0.0275, "ballshoot.png", "ballshoot_use.png");

let IntervalID = setInterval(tick, 20);

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
    if (!b3.alive) {
        e1.deathScreen();
    }
    if (Enemy.remaining == 0) {
        e1.win();
    }
}

var keypress_w = false;
var keypress_a = false;
var keypress_s = false;
var keypress_d = false;
var keypress_space = false;
var keypress_shift = false;

window.addEventListener("keydown", keypressed);
window.addEventListener("keyup", keyup);
window.addEventListener("click", onclick);

function keypressed(event) {
    if (event.keyCode == 87) {
        keypress_w = true;
        ar.spawn();
    }
    if (event.keyCode == 65) {
        keypress_a = true;
    }
    if (event.keyCode == 83) {
        keypress_s = true;
    }
    if (event.keyCode == 68) {
        keypress_d = true;
    }
    if (event.keyCode == 32) {
        keypress_space = true;
    }
    if (event.keyCode == 16) {
        keypress_shift = true;
    }
    if (event.keyCode == 82 && !b3.alive) {
        location.reload();
    }
}

function keyup(event) {
    if (event.keyCode == 87) {
        keypress_w = false;
    }
    if (event.keyCode == 65) {
        keypress_a = false;
    }
    if (event.keyCode == 83) {
        keypress_s = false;
    }
    if (event.keyCode == 68) {
        keypress_d = false;
    }
    if (event.keyCode == 32) {
        keypress_space = false;
    }
    if (event.keyCode == 16) {
        keypress_shift = false;
    }
}

function onclick(event) {
    if (Math.abs(event.x - xmax / 2) <= xmax / 6 && Math.abs(event.y - ymax / 1.55) <= ymax / 16 && !b3.alive) location.reload();
}
