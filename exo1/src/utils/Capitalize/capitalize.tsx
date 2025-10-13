export function capitalize(word: string): string {
  if (typeof word !== "string") throw new Error("Vous devez fournir un mot");
  if (word.length === 0) throw new Error("Vous devez fournir un mot");
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}