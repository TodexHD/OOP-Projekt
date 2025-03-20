class Ball {
    touching_floor = false;
    constructor(x, y, r, src, color, vx, vy) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.src = src;
        this.color = color;
        this.vx = vx;
        this.vy = vy;
        this.def_r = this.r;
        this.shrink = 100;
        this.run = 2 * this.vx;
    }
    move() {
        if (keypress_a) {
            this.x -= this.vx;
        }
        if (keypress_d) {
            this.x += this.vx;
        }
        if (keypress_shift && this.shrink > 0) {
            this.vx = this.run;
            this.shrink -= 1;
        } else this.vx = this.run * 0.5;
        this.draw();
    }

    fall() {
        this.move();
        if (keypress_space) {
            if (this.touching_floor && this.shrink > 0) {
                this.vy -= ymax / 1100;
                console.log("hello");
                this.shrink -= 2;
            }
        }

        const a = ymax / 1500;
        this.vy += a;
        if (f1.y - this.y <= this.r) {
            if (this.vy > 0) {
                this.vy = -0;
                this.y = f1.y - this.r;
                this.touching_floor = true;
            }
        }
        if (this.y + f2.y <= this.r - f2.y + f2.h) {
            if (this.vy < 0) {
                this.vy = -0;
                this.y = f2.y + this.r + f2.h;
            }
        }

        if (f1.y - this.y <= this.r) {
            this.touching_floor = false;
        }

        this.y += this.vy;

        if (this.x - w1.w <= this.r) {
            console.log("Hello");
            this.x = w1.w + this.r;
        }

        if (w2.x + w2.w - this.x <= this.r) {
            console.log("Hello");
            this.x = xmax - w1.w - this.r;
        }

        if (keypress_s && this.shrink > 0) {
            this.r = xmax * 0.01;
            this.shrink -= 1;
            if (this.shrink <= 0) {
                keypress_s = false;
            }
        }

        if (!keypress_s) {
            this.r = this.def_r;
        }
        this.draw();
    }

    draw() {
        setFillColor(this.color);
        fillCircle(this.x, this.y, this.r);
        let image = new Image();
        image.src = this.src;
        ctx.drawImage(image, this.x, this.y - this.r, this.r * 2, this.r * 2);
    }
}
