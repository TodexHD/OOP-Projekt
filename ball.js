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
    }

    move() {
        if (keypress_a) {
            this.x -= 5;
        }
        if (keypress_d) {
            this.x += 5;
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
        if (f1.y - this.y <= 50) {
            if (this.vy > 0) {
                this.vy = -0;
                this.y = f1.y - 50;
                this.touching_floor = true;
            }
        }
        if (f1.y - this.y > 50) {
            this.touching_floor = false;
        }

        this.y += this.vy;

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
