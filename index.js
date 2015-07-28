'use strict'

module.exports = function mapTimes (count, callback) {
  var results = []
  for (var i = 0; i < count; i++) {
    results.push(callback(i))
  }
  return results
}
