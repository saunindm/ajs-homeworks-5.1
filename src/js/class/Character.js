export default class Character {
    constructor(name, type) {
        const validTypes = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];
        
        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Name should be a string with a length between 2 and 10 characters.');
        } else {
            this.name = name;
        }
      
        if (!validTypes.includes(type)) {
            throw new Error('Invalid character type.');
        } else {
            this.type = type;
        }  

        this.health = 100;
        this.level = 1;

        this.attack = undefined;
        this.defence = undefined;
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error('Level up available only for alive.');
        }
    
        this.level += 1;
        this.health = 100;
        this.attack *= 1.2;
        this.defence *= 1.2;
      }
    
    damage(points) {
        this.health -= points * (1 - this.defence / 100);
    }
}