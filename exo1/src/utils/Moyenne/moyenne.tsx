export function moyenne([...notes]: number[]): number {
  if (notes.length === 0) throw (new Error("La liste des notes ne peut pas être vide"));
  const sum = notes.reduce((acc, note) => acc + note, 0);
  return sum / notes.length;
}