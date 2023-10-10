import Bowman from '../class/Bowman';

test('Creating a valid character', () => {
    const bowman = new Bowman('Robin Hood');
    const correct = {
        name: 'Robin Hood',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };

    expect(bowman).toEqual(correct);
});

test('Creating a character with an invalid name', () => {
    expect(() => new Bowman('Robin Hood from the Sherwood Forest', 'Bowman')).toThrow(
    'Name should be a string with a length between 2 and 10 characters.'
    );
});

test('Creating a character with an invalid type', () => {
    expect(() => new Bowman('Robin Hood', 'Archer')).toThrow(
    'Invalid character type.'
    );
});

test('Leveling up a character', () => {
    const bowman = new Bowman('Robin Hood', 'Bowman');
    bowman.levelUp();
    expect(bowman).toEqual({
        name: 'Robin Hood',
        type: 'Bowman',
        health: 100,
        level: 2,
        attack: 30,
        defence: 30,
    });
});

test('Leveling up a dead character should throw an error', () => {
    const bowman = new Bowman('Robin Hood', 'Bowman');
    bowman.health = 0;
    expect(() => bowman.levelUp()).toThrow('Level up available only for alive.');
});

test('Character taking damage', () => {
    const bowman = new Bowman('Robin Hood', 'Bowman');
    bowman.damage(20);
    expect(bowman.health).toBe(85);
});
