module.exports = function keyWrapper(namespace, actions) {
  return Object.keys(actions)
    .reduce((o, action) => {
      o[action] = `${namespace}__${action}`
      return o
    }, {})
}
