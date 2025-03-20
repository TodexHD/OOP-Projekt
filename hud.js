class Shrink {
    constructor(x, y, w, h, color) {
        this.x = x;
        this.x = y;
        this.w = w;
        this.h = h;
        this.color = color;
    }

    draw() {
        setFillColor(this.color);
        fillRect(this.x, this.y, this.w, this.h);
        setFillColor("black");
        rect(this.x, this.y, this.w, this.h);
        console.log("drawing");
    }
}
