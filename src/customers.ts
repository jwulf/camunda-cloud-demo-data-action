import {randomize} from './randomize'

const customers = [
  'Olive Ser',
  'Marni Fitzsimmons',
  'Damion Roughton',
  'Argentina Johannessen',
  'Ardis Zuerlein',
  'Francis Celeste',
  'Clifford Pinheiro',
  'Erasmo Hulburt',
  'Clarita Puraty',
  'Thaddeus Muina',
  'Enriqueta Girardeau'
]

export function getCustomerName(max: number): string {
  return randomize(max, customers)
}
