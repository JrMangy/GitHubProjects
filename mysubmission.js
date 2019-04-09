

var slice = Array.prototype.slice

function logger(namespace) {
  return function() {
  	var args = slice.call(arguments);
  	console.log.apply(null, [namespace].concat(args));
  }
}

module.exports = logger

/*function repeat(operation, num) {
      if (num <= 0) return
      operation()
      return repeat(operation, --num)
    }
    
    module.exports = repeat

    function repeat(operation, num) {
        if (num <= 0) return
        operation()
        return repeat(operation, --num)
      }
      
      module.exports = repeat
      
          module.exports = function doubleAll(numbers) {
      return numbers.map(function double(num) {
        return num * 2
      })
    }
    
        module.exports = function getShortMessages(messages) {
      return messages.filter(function(item) {
        return item.message.length < 50
      }).map(function(item) {
        return item.message
      })
    }


    function checkUsersValid(goodUsers) {
  return function(submittedUsers) {
    return submittedUsers.every(function(submit) {
    	return goodUsers.some(function(good) {
    		return good.id === submit.id;
    	})
    })
  };
}

module.exports = checkUsersValid


    function countWords(arr) {
      return arr.reduce(function(countMap, word) {
        countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
        return countMap
      }, {}) // second argument to reduce initialises countMap to {}
    }
    
    module.exports = countWords

    function reduce(arr, fn, initial) {
      return (function reduceOne(index, value) {
        if (index > arr.length - 1) return value // end condition
        return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
      })(0, initial) // IIFE. kick off recursion with initial values
    }
    
    module.exports = reduce
    
    function duckCount() {
      return Array.prototype.slice.call(arguments).filter(function(obj) {
        return Object.prototype.hasOwnProperty.call(obj, 'quack')
      }).length
    }
    
    module.exports = duckCount

        var slice = Array.prototype.slice
    
    function logger(namespace) {
      return function() {
        console.log.apply(console, [namespace].concat(slice.call(arguments)))
      }
    }
    
    module.exports = logger






















    */