export default function hasValuesFromArray(s, array) {
  for (const i of array) {
    if (!s.has(i)) {
      return false;
    }
  }
  return true;
}
