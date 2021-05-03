class Ninja {
    constructor(name, health, strength, speed) {
        this.name = name;
        this.health = health;
        this.strength = 3;
        this.speed = 3;
    }
    sayName() {
        console.log(`My Ninja name is ${this.name}`);
    }
    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Strength: ${this.strength}, Speed: ${this.speed}`);
    }
    drinkSake() {
        this.health += 10;
    }
}


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();