export function filtrerPairs(nombres: number[]): number[] {
  if (!Array.isArray(nombres)) throw new Error("Vous devez fournir un tableau de nombres");
  return nombres.filter(nombre => nombre % 2 === 0);
}