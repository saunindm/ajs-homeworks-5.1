import Zombie from '../class/Zombie';

test('Creating a valid character', () => {
    const zombie = new Zombie('Brainy');
    const correct = {
        name: 'Brainy',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    };

    expect(zombie).toEqual(correct);
});

test('Creating a character with an invalid name', () => {
    expect(() => new Zombie('Brainy the Eater of Brains', 'Zombie')).toThrow(
    'Name should be a string with a length between 2 and 10 characters.'
    );
});

test('Creating a character with an invalid type', () => {
    expect(() => new Zombie('Brainy', 'Ghoul')).toThrow(
    'Invalid character type.'
    );
});

test('Leveling up a character', () => {
    const zombie = new Zombie('Brainy', 'Zombie');
    zombie.levelUp();
    expect(zombie).toEqual({
        name: 'Brainy',
        type: 'Zombie',
        health: 100,
        level: 2,
        attack: 12,
        defence: 48,
    });
});

test('Leveling up a dead character should throw an error', () => {
    const zombie = new Zombie('Brainy', 'Zombie');
    zombie.health = 0;
    expect(() => zombie.levelUp()).toThrow('Level up available only for alive.');
});

test('Character taking damage', () => {
    const zombie = new Zombie('Brainy', 'Zombie');
    zombie.damage(20);
    expect(zombie.health).toBe(88);
});
