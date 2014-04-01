
# respict

A dictionary data structure which keeps properties up in the parent they were created. Just like a JS execution context. Its probably only useful if your building a language or a fancy template engine.

## Installation

With your favorite package manager:

- [packin](//github.com/jkroso/packin): `packin add respict`
- [component](//github.com/component/component#installing-packages): `component install jkroso/respict`
- [npm](//npmjs.org/doc/cli/npm-install.html): `npm install respict`

then in your app:

```js
var Respict = require('respict')
```

## API

### Respict(data, parent)

```js
var parent = new Respict({a: 1})
var child = new Respict({b: 2}, parent)
child.data // => {b: 2}
child.parent // => parent
```

### Respict#set(key, value)

rebind `key` to `value`. If `key` is not allready bound anywhere in the parent hierachy a new binding will be created on `this` dictionary.

```js
child.set('a', 3) // => 3
parent.data // => {a: 3}
child.set('c', 4) // => 4
child.data // => {b:2, c:4}
```

### Respict#get(key, [fallback])

get the value bound to `key`

```js
child.get('a') // => parent.get('a')
parent.get('a') // => 3
```

### Respict#has(key)

check if `key` is bound on `this` dictionary or one of its parents

```js
child.has('a') // => true
child.has('b') // => true
child.has('c') // => true
child.has('d') // => false
```

### Respict#create(key)

create `key` on `this` dictionary even if it already exists on a parent.

```js
child.data // => {b:2, c:4}
child.create('a', 1)
child.data // => {a:1, b:2, c:4}
child.get('a') // => 1
parent.get('a') // => 3
```
