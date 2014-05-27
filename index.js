
module.exports = Respict

function Respict(data, parent){
  this.parent = parent || null
  this.data = data || {}
}

Respict.prototype.get = function(key, fallback){
  var dict = this
  while (!(key in dict.data)) {
    if (!dict.parent) return fallback
    dict = dict.parent
  }
  return dict.data[key]
}

Respict.prototype.has = function(key){
  var dict = this
  while (!(key in dict.data)) {
    if (!dict.parent) return false
    dict = dict.parent
  }
  return true
}

Respict.prototype.set = function(key, val){
  var dict = this.owner(key) || this
  return dict.data[key] = val
}

Respict.prototype.owner = function(key){
  var dict = this
  while (!(key in dict.data)) {
    if (!dict.parent) return null
    dict = dict.parent
  }
  return dict
}

Respict.prototype.create = function(key){
  return this.data[key] = null
}

Respict.prototype.inspect = function(){
  return JSON.stringify(this.data, null, 2)
}
