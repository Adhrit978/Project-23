class computerbase {
    constructor(x, y, w, h) {
        var options = {
            isStatic: true
        }

        this.body=Bodies.rectangle(x, y, w, h, options);
        this.x=x;
        this.y=y;
        this.w=width;
        this.h-height;
        this.image=loadImage("base2.png");
        World.add(world, this.body);
    }
    display() {
        var position=this.body.position;
        var angle=this.body.angle;

        push();
        translate(position.x, position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 180, 150);
        pop();
    }
}