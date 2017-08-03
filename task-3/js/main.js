function daySpan (date1, date2) {
  return Math.abs((date1.getTime() - date2.getTime()) / 86400000)
}

function dayStringSpan (date1, date2) {
  return Math.abs((Date.parse(date1) - Date.parse(date2)) / 86400000)
}

function countRepeat (arr) {
  let result = [0]
  arr.forEach(function (element) {
    Number.isInteger(result[element]) ? result[element]++ : result[element] = 1
  }, this)
  return result
}

function camelCase (str) {
  let camel = ''
  for (var x = 0; x < str.split(/\W/).length; x++) {
    if (str.split(/\W/)[x].length !== 0) camel = camel.concat(str.split(/\W/)[x].toLowerCase()[0].toUpperCase(), str.split(/\W/)[x].toLowerCase().substr(1))
  }
  return camel[0].toLowerCase() + camel.substr(1)
}

function firstNonRepeat (str) {
  str.forEach(function (element) {
    if (str.indexOf(element) === str.lastIndexOf(element)) return element
  }, this)
}

function flatten (arr) {
  const flattened = []
  arr.forEach(function (element) {
    Array.isArray(element) ? flattened.push(flatten(element)) : flattened.push(element)
  }, this)
  return flattened
}

function nonUniqueElements (arr) {
  const nonunique = []
  arr.forEach(function (element) {
    if (arr.indexOf(element) !== arr.lastIndexOf(element)) nonunique.push(element)
  }, this)
  return nonunique
}

function display () {
  document.write(flatten([1, 2, [3, [4]]]))
}
