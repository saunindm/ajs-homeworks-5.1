const validTypes = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];

const typesParameters = {
    Bowman: { attack: 25, defence: 25 },
    Swordsman: { attack: 40, defence: 10 },
    Magician: { attack: 10, defence: 40 },
    Daemon: { attack: 25, defence: 25 },
    Undead: { attack: 40, defence: 10 },
    Zombie: { attack: 10, defence: 40 },
  };

export class Character {
    constructor(name, type, health, level, attack, defence) {
        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Name should be a string with a length between 2 and 10 characters.');
        }
      
        if (!validTypes.includes(type)) {
            throw new Error('Invalid character type.');
        }
        
        this.name = name.toString();
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = typesParameters[type].attack;
        this.defence = typesParameters[type].defence;
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

export class Bowman extends Character { }

export class Swordsman extends Character { }

export class Magician extends Character { }

export class Daemon extends Character { }

export class Undead extends Character { }

export class Zombie extends Character { }