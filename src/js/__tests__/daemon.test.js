import Daemon from '../class/Daemon';

test('Creating a valid character', () => {
    const daemon = new Daemon('Omen');
    const correct = {
        name: 'Omen',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };

    expect(daemon).toEqual(correct);
});

test('Creating a character with an invalid name', () => {
    expect(() => new Daemon('Omen HP Laptop', 'Daemon')).toThrow(
    'Name should be a string with a length between 2 and 10 characters.'
    );
});

test('Creating a character with an invalid type', () => {
    expect(() => new Daemon('Omen', 'Ghost')).toThrow(
    'Invalid character type.'
    );
});

test('Leveling up a character', () => {
    const daemon = new Daemon('Omen', 'Daemon');
    daemon.levelUp();
    expect(daemon).toEqual({
        name: 'Omen',
        type: 'Daemon',
        health: 100,
        level: 2,
        attack: 30,
        defence: 30,
    });
});

test('Leveling up a dead character should throw an error', () => {
    const daemon = new Daemon('Omen', 'Daemon');
    daemon.health = 0;
    expect(() => daemon.levelUp()).toThrow('Level up available only for alive.');
});

test('Character taking damage', () => {
    const daemon = new Daemon('Omen', 'Daemon');
    daemon.damage(20);
    expect(daemon.health).toBe(85);
});
