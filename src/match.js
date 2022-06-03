export default function sortCharacter(characters) {
  characters.sort((char1, char2) => char2.health - char1.health);
}
