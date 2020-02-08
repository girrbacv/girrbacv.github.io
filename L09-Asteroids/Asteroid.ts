namespace L09_Asteroids {
    class Asteroid{

    position: Vector;
    velocity: Vector;
    type: number;
    size: number;

    constructor(_size: number) {
        console.log("AsteroidConstructor");
        }

    moveBy(_timeslice: number) {
        console.log("AsteroidMove");
        }

    draw(): void {
        console.log("AsteroidDraw");
        }
    }
}