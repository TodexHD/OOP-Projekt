class Enemy {
    touching_floor = false;
    constructor(x, y, r, src, color, vx, vy) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.src = src;
        this.color = color;
        this.vx = vx;
        this.vy = vy;
        this.invincible = true;
        this.children = [];
        this.show = true;
        setTimeout(() => (this.invincible = false), 2000);
    }

    fall() {
        if (this.children != 0) {
            for (let child of this.children) {
                child.fall();
            }
            return;
        }
        if (!this.show) return;
        this.hit();

        if (Math.sqrt((b3.x - this.x) ** 2 + (b3.y - this.y) ** 2) <= this.r + b3.r) {
            alert("Game Over");
        }

        const a = 0.1;
        this.vy += a;

        if (f1.y - this.y <= this.r) {
            if (this.vy > 0) {
                this.vy = -this.vy;
                this.y = f1.y - this.r;
                this.touching_floor = true;
            }
        }
        if (f1.y - this.y > this.r) {
            this.touching_floor = false;
        }

        this.y += this.vy;
        this.x += this.vx;

        this.draw();
    }

    hit() {
        if (!ar.show) return;
        if (this.invincible) return;
        if (this.x - this.r < ar.x && ar.x < this.x + this.r) {
            console.log("Hello");
            let y = Math.sqrt(this.r ** 2 - (ar.x - this.x) ** 2) + this.y;
            if (y > ar.y - ar.h) {
                console.log("hit");
                if (this.r > 10) {
                    this.children.push(
                        new Enemy(this.x, this.y, this.r / 2, "", "red", this.vx + 2, this.vy * 0.8),

                        new Enemy(this.x, this.y, this.r / 2, "", "red", this.vx - 2, this.vy * 0.8)
                    );
                }
                this.show = false;
            }
        }
    }

    draw() {
        if (this.show) {
            setFillColor(this.color);
            fillCircle(this.x, this.y, this.r);
            let image = new Image();
            image.src = this.src;
            ctx.drawImage(image, this.x, this.y - this.r, this.r * 2, this.r * 2);
        }
    }
}
