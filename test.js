'use strict'

var test = require('tape')
var times = require('./')

test(function (t) {
  var result = times(3, function (index) {
    return index * 2
  })
  t.deepEqual(result, [0, 2, 4])
  t.end()
})
