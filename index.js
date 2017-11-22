module.exports = function keyWrapper(namespace, actions) {
  const keys = Array.isArray(actions) ? actions : Object.keys(actions)
  return keys.reduce((o, action) => {
    o[action] = `${namespace}__${action}`
    return o
  }, {})
}
