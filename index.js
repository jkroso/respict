
module.exports = Dict

function Dict(data, parent){
  this.parent = parent || null
  this.data = data || {}
}

Dict.prototype.get = function(key, fallback){
  var dict = this
  while (!(key in dict.data)) {
    if (!dict.parent) return fallback
    dict = dict.parent
  }
  return dict.data[key]
}

Dict.prototype.has = function(key){
  var dict = this
  while (!(key in dict.data)) {
    if (!dict.parent) return false
    dict = dict.parent
  }
  return true
}

Dict.prototype.set = function(key, val){
  var dict = this.owner(key) || this
  return dict.data[key] = val
}

Dict.prototype.owner = function(key){
  var dict = this
  while (!(key in dict.data)) {
    if (!dict.parent) return null
    dict = dict.parent
  }
  return dict
}
