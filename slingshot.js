class Slingshot {
    constructor(body1, point) {
        var options = {
            bodyA: body1,
            pointB: point,
            stiffness: 0.04,
            length: 15
        }

        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    } 

    display() {

        if(this.sling.bodyA) {
            strokeWeight(4);
            var startPoint = this.sling.bodyA.position;
            var endPoint = this.sling.pointB;
            strokeWeight(4);
            line(startPoint.x, startPoint.y, endPoint.x, endPoint.y);
        }


    }

    fly() {
        this.sling.bodyA = null
    }
}