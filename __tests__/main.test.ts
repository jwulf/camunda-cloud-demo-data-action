import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'
import {getProductsJSONString} from '../src/products'
// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  process.env['INPUT_MILLISECONDS'] = '500'
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecSyncOptions = {
    env: process.env
  }
  console.log(cp.execSync(`node ${ip}`, options).toString())
})

test('getProductsJSONString', () => {
  const str = getProductsJSONString()
  console.log(JSON.parse(`{"products": "${str}"}`))
  expect(JSON.parse(`{"products": "${str}"}`)).toBeTruthy()
})
