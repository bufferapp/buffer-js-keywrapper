# @bufferapp/keywrapper

A quick way to wrap your Redux actions in a namespace.

When dealing with larger Redux applications, this can help avoid generic
action names from causing side effects. This will return an object with
namespaced string constants given a string namespace and an object.  See
usage examples below for more info.

## Install

```
npm install @bufferapp/keywrapper
```

## Usage

```
import keyWrapper from '@bufferapp/keywrapper'

const actions = keyWrapper('QUEUE', {
  POST_DELETE: 0,
  POST_SHARE_NOW: 0
})

console.log(actions)
/*
{
  POST_DELETE: 'QUEUE__POST_DELETE',
  POST_SHARE_NOW: 'QUEUE__POST_SHARE_NOW',
}
*/
```

## License

MIT
