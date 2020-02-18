import {randomize} from './randomize'

const products = [
  'Limited Edition Zeebe T-shirt',
  'Camunda Escalation Ale',
  'Real-Life BPMN Book'
]

export function getProduct(max: number): string {
  return randomize(max, products)
}

export function getProducts(): string[] {
  return products
}

export function getProductsJSONString(): string {
  return JSON.stringify(getProducts())
    .split('"')
    .join('\\"')
}
