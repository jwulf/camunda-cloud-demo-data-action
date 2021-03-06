import * as core from '@actions/core'
import {getProduct, getProductsJSONString} from './products'
import {getCustomerName} from './customers'

async function run(): Promise<void> {
  try {
    const productRange = parseInt(core.getInput('product_range') || '100', 10)
    const customerRange = parseInt(core.getInput('customer_range') || '100', 10)
    core.setOutput('product', getProduct(productRange))
    core.setOutput('customer', getCustomerName(customerRange))
    const productsJSON = getProductsJSONString()
    core.setOutput('products', productsJSON)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
