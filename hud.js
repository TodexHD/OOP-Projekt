class Shrink {
    constructor(x, y, w, h, color) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
    }

    draw() {
        setFillColor(this.color);
        fillRect(this.x, this.y, this.w * (b3.shrink / 100), this.h);
        setFillColor("black");
        rect(this.x, this.y, this.w, this.h);
    }
}

class Icon {
    constructor(x, y, r, src, src2) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.src = src;
        this.src2 = src2;
    }

    drawShrink() {
        let image = new Image();
        image.src = this.src;

        ctx.drawImage(image, this.x, this.y, this.r * 2, this.r * 2);
        if (keypress_s && b3.shrink > 0) {
            let image = new Image();
            image.src = this.src2;
            ctx.drawImage(image, this.x, this.y, this.r * 2, this.r * 2);
        }

        setFillColor("black");
        rect(this.x, this.y, 2 * this.r, 2 * this.r);
    }

    drawRun() {
        let image = new Image();
        image.src = this.src;

        ctx.drawImage(image, this.x, this.y, this.r * 2, this.r * 2);
        if (keypress_shift && b3.shrink > 0) {
            let image = new Image();
            image.src = this.src2;
            ctx.drawImage(image, this.x, this.y, this.r * 2, this.r * 2);
        }

        setFillColor("black");
        rect(this.x, this.y, 2 * this.r, 2 * this.r);
    }

    drawJump() {
        let image = new Image();
        image.src = this.src;

        ctx.drawImage(image, this.x, this.y, this.r * 2, this.r * 2);
        if (keypress_space && b3.shrink > 0) {
            let image = new Image();
            image.src = this.src2;
            ctx.drawImage(image, this.x, this.y, this.r * 2, this.r * 2);
        }

        setFillColor("black");
        rect(this.x, this.y, 2 * this.r, 2 * this.r);
    }

    drawShoot() {
        let image = new Image();
        image.src = this.src;

        ctx.drawImage(image, this.x, this.y, this.r * 2, this.r * 2);
        if (keypress_w && b3.shrink > 0) {
            let image = new Image();
            image.src = this.src2;
            ctx.drawImage(image, this.x, this.y, this.r * 2, this.r * 2);
        }

        setFillColor("black");
        rect(this.x, this.y, 2 * this.r, 2 * this.r);
    }
}
