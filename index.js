'use strict'

module.exports = function mapTimes (count, callback) {
  var results = new Array(count)
  for (var i = 0; i < count; i++) {
    results[i] = callback(i)
  }
  return results
}
