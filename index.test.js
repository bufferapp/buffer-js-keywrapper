const assert = require('assert')
const keyWrapper = require('./index')

const actionObject = {
  CLICK_BUTTON: 0,
  ADDITEM: 0
}

const wrappedOne = keyWrapper('ONE', actionObject)

assert.equal(wrappedOne.CLICK_BUTTON, 'ONE__CLICK_BUTTON')
assert.equal(wrappedOne.ADDITEM, 'ONE__ADDITEM')

console.log('Tests passed!')
