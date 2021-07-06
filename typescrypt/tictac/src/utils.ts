export function transpose<T>(arrays: T[][]) {
  return arrays.map((_, j) => arrays[0].map((_, i) => arrays[i][j]));
}
