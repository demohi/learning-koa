const delegate = require('delegates')

const proto = {
  hello () {
    return 'Hello'
  }
}

delegate(proto, 'response')
  .method('helloo')

const protoo = Object.create(proto)
protoo.response = {
  helloo () {
    return 'Helloo'
  }
}
console.log(protoo)
console.log(proto)
console.log(protoo.helloo())
