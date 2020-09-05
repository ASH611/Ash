class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites./sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        polygon = Bodies.circle(50,200,20);
        this.pointB = pointB
        this.polygon = Constraint.create(options);
        World.add(world,polygon);
    }

    fly(){
        this.polygon.bodyA = null;
    }

    display(){
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        imageMode(CENTER);
        image(polygon_img,polygon.postion.x,polygon.postion.y,40,40)
        if(this.polygon.bodyA){
            var pointA = this.polygpn.bodyA.position;
            var pointB = this.pointB;
           
        

            strokeWeight(4);
            stroke(48,22,8);
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x+20, pointA.y, pointB.x+20, pointB.y);
            image(this.sling3, pointA.x-30,pointA.y-10,15,30)
            
            pop();
            
        }
    }
    
}