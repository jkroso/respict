
# shadowing-dict

A dictionary data structure which keeps properties up in the parent they were created. Just like a JS execution context. Its probably only useful if your building a language or a fancy template engine.

## Installation

With your favorite package manager:

- [packin](//github.com/jkroso/packin): `packin add jkroso/shadowing-dict`
- [component](//github.com/component/component#installing-packages): `component install jkroso/shadowing-dict`
- [npm](//npmjs.org/doc/cli/npm-install.html): `npm install shadowing-dict`

then in your app:

```js
var Dict = require('shadowing-dict')
```

## API

### Dict(data, parent)

```js
var parent = new Dict({a: 1})
var child = new Dict({b: 2}, parent)
child.data // => {b: 2}
child.parent // => parent
```

### Dict#set(key, value)

rebind `key` to `value`. If `key` is not allready bound anywhere in the parent hierachy a new binding will be created on `this` dictionary.

```js
child.set('a', 3) // => 3
parent.data // => {a: 3}
child.set('c', 4) // => 4
child.data // => {b:2, c:4}
```

### Dict#get(key, [fallback])

get the value bound to `key`

```js
child.get('a') // => parent.get('a')
parent.get('a') // => 3
```

### Dict#has(key)

check if `key` is bound on `this` dictionary or one of its parents

```js
child.has('a') // => true
child.has('b') // => true
child.has('c') // => true
child.has('d') // => false
```

### Dict#create(key)

create `key` on `this` dictionary even if it already exists on a parent.

```js
child.data // => {b:2, c:4}
child.create('a', 1)
child.data // => {a:1, b:2, c:4}
child.get('a') // => 1
parent.get('a') // => 3
```
