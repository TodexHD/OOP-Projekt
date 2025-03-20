class Arrow {
    constructor(x, y, h) {
        this.x = x;
        this.y = y;
        this.h = 0;
        this.show = false;
        this.despawn = false;
    }

    rise() {
        if (!this.show) return;
        if (!this.despawn) {
            if (this.y - this.h <= f2.y + f2.h) {
                this.h = this.y - f2.y - f2.h;
                this.despawn = true;
                setTimeout(this.reset.bind(this), 1000);
            } else {
                const a = ymax * 0.02;
                this.h += a;
            }
        }
        this.draw();
    }

    spawn() {
        if (this.show) return;
        this.show = true;
        this.x = b3.x;
        this.y = b3.y - b3.r;

        var audio = new Audio("Piuuuuuu.mp4");
        audio.play();
    }

    reset() {
        this.h = 0;
        this.show = false;
        this.despawn = false;
    }

    draw() {
        setFillColor("black");
        fillRect(this.x * 0.995, this.y, xmax * 0.003, -this.h);
    }
}
