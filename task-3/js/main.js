function daySpan (date1, date2) {
  return Math.abs((date1.getTime() - date2.getTime()) / 86400000)
}

function dayStringSpan (date1, date2) {
  return Math.abs((Date.parse(date1) - Date.parse(date2)) / 86400000)
}

function countRepeat (arr) {
  var result = [0]
  for (var x in arr) Number.isInteger(result[arr[x]]) ? result[arr[x]]++ : result[arr[x]] = 1
  return result
}

function camelCase (str) {
  var camel = ''
  for (var x = 0; x < str.split(/\W/).length; x++) {
    if (str.split(/\W/)[x].length !== 0) camel = camel.concat(str.split(/\W/)[x].toLowerCase()[0].toUpperCase(), str.split(/\W/)[x].toLowerCase().substr(1))
  }
  return camel[0].toLowerCase() + camel.substr(1)
}

function firstNonRepeat (str) {
  for (var x in str) {
    if (str.indexOf(str[x]) === str.lastIndexOf(str[x])) return str[x]
  }
}

var flattened = []
function flatten (arr) {
  for (var x in arr) Array.isArray(arr[x]) ? flatten(arr[x]) : flattened.push(arr[x])
  return flattened
}

function nonUniqueElements (arr) {
  var nonunique = []
  for (var x in arr) {
    if(arr.indexOf(arr[x]) !== arr.lastIndexOf(arr[x])) nonunique.push(arr[x])
  }
  return nonunique
}