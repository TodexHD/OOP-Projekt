class Floor{
    constructor(x,y,w,h,color){
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.color = color   
    }

    draw(){
        setFillColor(this.color)
        fillRect(this.x,this.y,this.w,this.h)
        
    }
}

