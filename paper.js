class Paper {
    constructor(x,y,r){
        var options = {
            friction:0.3,
            restitution:0,
            density:1.2,


             }

        this.body = Matter.Bodies.circle(x,y,r);
        this.width = r;
        this.height = r;
        this.image = loadImage("paper.png");
        World.add(world,this.body);





    }

    display(){
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height);
        pop()








    }





}