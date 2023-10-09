import { Character, Bowman, Daemon, Magician, Zombie, Undead, Swordsman } from '../characters';
  
test('Creating a valid character', () => {
    const character = new Character('Robin Hood', 'Bowman');
    expect(character).toEqual({
    name: 'Robin Hood',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
    });
});

test('Creating a character with an invalid name', () => {
    expect(() => new Magician('Mage with a very long name', 'Magician')).toThrow(
    'Name should be a string with a length between 2 and 10 characters.'
    );
});

test('Creating a character with an invalid type', () => {
    expect(() => new Bowman('Robin Hood', 'Archer')).toThrow(
    'Invalid character type.'
    );
});

test('Creating a Undead character', () => {
    const undead1 = new Undead('Bony', 'Undead');
    expect(undead1.type).toBe('Undead');
});

test('Leveling up a character', () => {
    const daemon1 = new Daemon('Omen', 'Daemon');
    daemon1.levelUp();
    expect(daemon1).toEqual({
        name: 'Omen',
        type: 'Daemon',
        health: 100,
        level: 2,
        attack: 30,
        defence: 30,
    });
});

test('Leveling up a dead character should throw an error', () => {
    const swordsman1 = new Swordsman('Bob', 'Swordsman');
    swordsman1.health = 0;
    expect(() => swordsman1.levelUp()).toThrow('Level up available only for alive.');
});

test('Character taking damage', () => {
    const zombie1 = new Zombie('Brainy', 'Zombie');
    zombie1.damage(20);
    expect(zombie1.health).toBe(88);
});
