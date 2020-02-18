export function randomize(max: number, items: string[]): string {
  const index = Math.round(Math.random() * max) % items.length
  return items[index]
}
