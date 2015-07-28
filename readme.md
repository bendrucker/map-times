# map-times [![Build Status](https://travis-ci.org/bendrucker/map-times.svg?branch=master)](https://travis-ci.org/bendrucker/map-times)

> Iterate through a count collecting results for each index


## Install

```
$ npm install --save map-times
```


## Usage

```js
var times = require('map-times')

times(3, function (index) {
  return index * 2  
})
//=> [0, 2, 4]
```

## API

#### `times(count, callback)` -> `array`

##### count

*Required*  
Type: `number`

The number of times to call the callback.

##### callback

*Required*  
Type: `function`  
Arguments: `index`

A function that will be called the specified number of times with the index of the call.

## License

MIT © [Ben Drucker](http://bendrucker.me)
