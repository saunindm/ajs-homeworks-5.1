import Magician from '../class/Magician';

test('Creating a valid character', () => {
    const magician = new Magician('Rincewind');
    const correct = {
        name: 'Rincewind',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    };

    expect(magician).toEqual(correct);
});

test('Creating a character with an invalid name', () => {
    expect(() => new Magician('Rincewind the Terrified', 'Magician')).toThrow(
    'Name should be a string with a length between 2 and 10 characters.'
    );
});

test('Creating a character with an invalid type', () => {
    expect(() => new Magician('Rincewind', 'Sorcerer')).toThrow(
    'Invalid character type.'
    );
});

test('Leveling up a character', () => {
    const magician = new Magician('Rincewind', 'Magician');
    magician.levelUp();
    expect(magician).toEqual({
        name: 'Rincewind',
        type: 'Magician',
        health: 100,
        level: 2,
        attack: 12,
        defence: 48,
    });
});

test('Leveling up a dead character should throw an error', () => {
    const magician = new Magician('Rincewind', 'Magician');
    magician.health = 0;
    expect(() => magician.levelUp()).toThrow('Level up available only for alive.');
});

test('Character taking damage', () => {
    const magician = new Magician('Rincewind', 'Magician');
    magician.damage(20);
    expect(magician.health).toBe(88);
});
