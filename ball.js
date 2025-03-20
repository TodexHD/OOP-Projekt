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
    }
    move() {
        if (keypress_a) {
            this.x -= this.vx;
        }
        if (keypress_d) {
            this.x += this.vx;
        }
        this.draw();
    }

    fall() {
        this.move();
        if (keypress_space) {
            if (this.touching_floor == true) {
                this.vy -= 6;
            }
        }

        const a = 0.5;
        this.vy += a;
        if (f1.y - this.y <= this.r) {
            if (this.vy > 0) {
                this.vy = -0;
                this.y = f1.y - this.r;
                this.touching_floor = true;
            }
        }
        if (f1.y - this.y > this.r) {
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
            console.log(this.shrink);
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
