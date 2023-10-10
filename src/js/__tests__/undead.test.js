import Undead from '../class/Undead';

test('Creating a valid character', () => {
    const undead = new Undead('Bony');
    const correct = {
        name: 'Bony',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    };

    expect(undead).toEqual(correct);
});

test('Creating a character with an invalid name', () => {
    expect(() => new Undead('Bony with big scull', 'Undead')).toThrow(
    'Name should be a string with a length between 2 and 10 characters.'
    );
});

test('Creating a character with an invalid type', () => {
    expect(() => new Undead('Bony', 'Living Dead')).toThrow(
    'Invalid character type.'
    );
});

test('Leveling up a character', () => {
    const undead = new Undead('Bony', 'Undead');
    undead.levelUp();
    expect(undead).toEqual({
        name: 'Bony',
        type: 'Undead',
        health: 100,
        level: 2,
        attack: 48,
        defence: 12,
    });
});

test('Leveling up a dead character should throw an error', () => {
    const undead = new Undead('Bony', 'Undead');
    undead.health = 0;
    expect(() => undead.levelUp()).toThrow('Level up available only for alive.');
});

test('Character taking damage', () => {
    const undead = new Undead('Bony', 'Undead');
    undead.damage(20);
    expect(undead.health).toBe(82);
});
