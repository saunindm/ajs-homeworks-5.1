import Character from '../class/Character';
  
test('Creating a valid character', () => {
    const character = new Character('Robin Hood', 'Bowman');
    const correct = {
        name: 'Robin Hood',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: undefined,
        defence: undefined,
    };

    expect(character).toEqual(correct);
});

test('Creating a character with an invalid name', () => {
    expect(() => new Character('Robin Hood from the Sherwood Forest', 'Bowman')).toThrow(
    'Name should be a string with a length between 2 and 10 characters.'
    );
});

test('Creating a character with an invalid type', () => {
    expect(() => new Character('Robin Hood', 'Archer')).toThrow(
    'Invalid character type.'
    );
});

test('Leveling up a character', () => {
    const character = new Character('Robin Hood', 'Bowman');
    character.levelUp();
    expect(character).toEqual({
        name: 'Robin Hood',
        type: 'Bowman',
        health: 100,
        level: 2,
        attack: NaN,
        defence: NaN,
    });
});

test('Leveling up a dead character should throw an error', () => {
    const character = new Character('Robin Hood', 'Bowman');
    character.health = 0;
    expect(() => character.levelUp()).toThrow('Level up available only for alive.');
});

test('Character taking damage', () => {
    const character = new Character('Robin Hood', 'Bowman');
    character.damage(20);
    expect(character.health).toBe(NaN);
});
