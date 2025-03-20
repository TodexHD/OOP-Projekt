class Enemy {
    touching_floor = false;
    constructor(x, y, r, src, depth, vx, vy) {
        let colors = ["#901bcf", "#1500ff", "#15ff00", "#ffff00", "#ffa200", "#ff0000", "#ff00aa"];
        this.x = x;
        this.y = y;
        this.r = r;
        this.src = src;
        this.depth = depth;
        this.color = colors[depth];
        this.vx = vx;
        this.vy = vy;
        this.invincible = true;
        this.children = [];
        this.show = true;
        setTimeout(() => (this.invincible = false), 2500);
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
            this.vy = -this.vy * 0.977;
            this.y = f1.y - this.r;
        }

        if (this.x - w1.x <= this.r + w1.w) {
            this.vx = -this.vx;
            this.x = w1.x + this.r + w1.w;
        }

        if (w2.x - this.x <= this.r - w2.w) {
            this.vx = -this.vx;
            this.x = w2.x - this.r + w2.w;
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
                if (this.r > xmax * 0.014) {
                    this.children.push(
                        new Enemy(this.x + (this.r / Math.sqrt(2)) * 0.6, this.y, this.r / Math.sqrt(2), "", this.depth + 1, this.vx + 2, this.vy * 0.8),

                        new Enemy(this.x - (this.r / Math.sqrt(2)) * 0.6, this.y, this.r / Math.sqrt(2), "", this.depth + 1, this.vx - 2, this.vy * 0.8)
                    );
                    b3.shrink += 25;
                    if (b3.shrink > 100) b3.shrink = 100;
                }
                this.show = false;
            }
        }
    }

    draw() {
        if (this.show) {
            setFillColor(this.color);
            fillCircle(this.x, this.y, this.r);
            setFillColor("black");
            circle(this.x, this.y, this.r);
            circle(this.x, this.y, this.r * 0.995);
            circle(this.x, this.y, this.r * 0.99);
            circle(this.x, this.y, this.r * 0.985);
            let image = new Image();
            image.src = this.src;
            ctx.drawImage(image, this.x, this.y - this.r, this.r * 2, this.r * 2);
        }
    }
}
