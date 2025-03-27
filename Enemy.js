class Enemy {
    touching_floor = false;
    alive = true;
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

        if (Math.sqrt((b3.x - this.x) ** 2 + (b3.y - this.y) ** 2) <= this.r + b3.r) {
            this.alive = false;
            ctx.textAlign = "center"; // horizontal center
            ctx.textBaseline = "middle"; // vertical center
            ctx.lineWidth = 20; // Set the outline thickness
            ctx.strokeStyle = "black"; // Set outline color
            setFillColor("#0b8a2c");
            fillRectCenter(xmax / 2, ymax / 2, xmax / 2, ymax / 2);
            setFillColor("black");
            setLineWidth(10);
            rectCenter(xmax / 2, ymax / 2, xmax / 2, ymax / 2);
            setFillColor("#424242");
            fillRectCenter(xmax / 2, ymax / 1.55, xmax / 3, ymax / 8);
            setFillColor("black");
            rectCenter(xmax / 2, ymax / 2, xmax / 2, ymax / 2);
            setFillColor("black");
            ctx.font = xmax / 20 + "px Arial";
            setLineWidth(5);
            ctx.strokeText("Restart", xmax / 2, ymax / 1.53);
            ctx.fillText("Restart", xmax / 2, ymax / 1.53);
            setFillColor("red");
            ctx.font = xmax / 14 + "px Arial";
            ctx.fillText("Game", xmax / 2, ymax / 2.7);
            ctx.strokeText("Game", xmax / 2, ymax / 2.7);
            ctx.fillText("Over", xmax / 2, ymax / 1.95);
            ctx.strokeText("Over", xmax / 2, ymax / 1.95);
            setLineWidth(1);
            this.alive = false;
        }
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
                    var audio = new Audio("Öhhhh.m4a");
                    audio.play();
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
