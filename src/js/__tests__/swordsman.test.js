import Swordsman from '../class/Swordsman';

test('Creating a valid character', () => {
    const swordsman = new Swordsman('Ulric');
    const correct = {
        name: 'Ulric',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    };

    expect(swordsman).toEqual(correct);
});

test('Creating a character with an invalid name', () => {
    expect(() => new Swordsman('Ulric the Knight', 'Swordsman')).toThrow(
    'Name should be a string with a length between 2 and 10 characters.'
    );
});

test('Creating a character with an invalid type', () => {
    expect(() => new Swordsman('Ulric', 'Warrior')).toThrow(
    'Invalid character type.'
    );
});

test('Leveling up a character', () => {
    const swordsman = new Swordsman('Ulric', 'Swordsman');
    swordsman.levelUp();
    expect(swordsman).toEqual({
        name: 'Ulric',
        type: 'Swordsman',
        health: 100,
        level: 2,
        attack: 48,
        defence: 12,
    });
});

test('Leveling up a dead character should throw an error', () => {
    const swordsman = new Swordsman('Ulric', 'Swordsman');
    swordsman.health = 0;
    expect(() => swordsman.levelUp()).toThrow('Level up available only for alive.');
});

test('Character taking damage', () => {
    const swordsman = new Swordsman('Ulric', 'Swordsman');
    swordsman.damage(20);
    expect(swordsman.health).toBe(82);
});
