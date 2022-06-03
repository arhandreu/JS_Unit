import healthStatus from '../src/status';

test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Лучник', health: 50 }, 'wounded'],
  [{ name: 'Воин', health: 10 }, 'critical'],
  [{ name: 'Воин', health: 200 }, 'fall'],
])('Тест', (character, expected) => {
  const result = healthStatus(character);
  expect(result).toBe(expected);
});
