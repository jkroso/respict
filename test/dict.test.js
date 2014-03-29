
var Dict = require('..')

describe('Dict#get', function(){
  var a = new Dict({a: 1})
  var b = new Dict({}, a)

  it('return local properties', function(){
    assert(a.get('a') == 1)
  })

  it('return parent properties', function(){
    assert(a.get('a') == 1)
  })
})

describe('Dict#set', function(){
  var a = new Dict({a: 1})

  it('set new properties', function(){
    a.set('prop', 1)
    assert(a.get('prop') == 1)
  })

  it('reset old properties', function(){
    assert(a.get('a') == 1)
    a.set('a', 2)
    assert(a.get('a') == 2)
  })
})

describe('Dict#has', function(){
  var a = new Dict({a: 1})
  var b = new Dict({}, a)

  it('own properties', function(){
    assert(a.has('a'))
  })

  it('parent properties', function(){
    assert(b.has('a'))
  })
})
