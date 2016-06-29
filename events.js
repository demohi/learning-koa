const EventEmitter = require('events')
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter()
myEmitter.once('newListener', (event, listener) => {
  console.log(event)
})
myEmitter.on('event', (a, b) => {
  console.log(a, b, this)
  setImmediate(() => {
    console.log('this happens asynchronously')
  })
})
myEmitter.emit('event', 'a', 'b')

process.on('uncaughtException', (err) => {
  console.log(err)
})
myEmitter.on('error', () => {
  console.log('whoops! there was an error1')
})
myEmitter.on('error', () => {
  console.log('whoops! there was an error2')
})
myEmitter.emit('test', new Error('whoops!'))
myEmitter.emit('error', new Error('whoops!'))

console.log(myEmitter.listenerCount('error'))
