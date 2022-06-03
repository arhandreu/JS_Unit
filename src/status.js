export default function healthStatus(character) {
  const healthCount = character.health;
  let status = 'fall';

  if (healthCount > 0 && healthCount < 15) {
    status = 'critical';
  } else if (healthCount >= 15 && healthCount <= 50) {
    status = 'wounded';
  } else if (healthCount > 50 && healthCount <= 100) {
    status = 'healthy';
  } else {
    return status;
  }
  return status;
}
