// Finish the five methods attached to the _ object to create your own custom library.  The purpose of this assignment is to show how a simple JavaScript library can be made.
//
// Consider the below example:
//Can we make this into a method of an object?
function each(arr, callback){
    //loop through the array
    for(var i = 0; i < arr.length; i++){
        callback(arr[i]); //invoking the callback many times....delegation!
    }
}

// Your mission is to build your own version of the underscore library. Try to get as close as you can to what underscore provides for each example below.
// To create your own custom JavaScript library, you will just add methods to a JS object! (Later on when we teach you about immediate functions you’ll see how to make this more robust to build libraries like jQuery!).
// Let’s build a few methods of underscore!

var _ = {

    // **********************************************************************
    // From underscore.js; Each: The cornerstone, an each implementation, aka forEach. Handles raw objects in addition to array-likes. Treats all sparse array-likes as if they were dense.
    each: function(array, callback){
        //loop through the array
        for(var i = 0; i < array.length; i++){
            callback(array[i]); //invoking the callback many times....delegation!
        }
    },


    // **********************************************************************
    //From underscore.js;  Map: Produces a new array of values by mapping each value in list through a transformation function (iteratee). The iteratee is passed three arguments: the value, then the index (or key) of the iteration, and finally a reference to the entire list.

    map: function(array, callback) {
        for(var i = 0; i < array.length; i++){
            array[i] = callback(array[i]);
        }
    },
    // Example of Map: _.map([1, 2, 3], function(num){ return num * 3; });
    // => [3, 6, 9]
    // _.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
    // => [3, 6, 9]
    // _.map([[1, 2], [3, 4]], _.first);
    // => [1, 3]

    // **********************************************************************
    //From underscore.js; Reduce: Reduce builds up a single result from a list of values, aka inject, or foldl.
    reduce: function(array, callback) {
        for(var i = 0; i < array.length; i++){
            array[i] = callback(array[i]);
        }
    },
    // Example of reduce: var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
    // => 6



    // **********************************************************************
    // From underscore.js; Find: Return the first value which passes a truth test. Aliased as detect.
    find: function() {

    },
    // Example of find: var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
    // => 2


    // **********************************************************************
    //From underscore.js; Filter: Return all the elements that pass a truth test. Aliased as select.
    filter: function(array, callback) {
        var tempArray = [];
        for(var i = 0; i < array.length; i++){
            //Parent Function passes data (array[i]) to the callback as parameter
            if(callback(array[i])){
                tempArray.push(array[i]);
            }
        }
        //we could also modify the original array
        return tempArray;
      },
    // Example of filter: var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
    // => [2, 4, 6]


    // **********************************************************************
    // From underscore.js; Reject: Return all the elements for which a truth test fails.
    reject: function(){

    }
    // Example of reject: var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
    // => [1, 3, 5]
}
// you just created a library with 5 methods

var evens = _.filter([1,2,3,4,5,6], function(num){ return num % 2 == 0; });
    // //callback passes data(array[i]) to Parent Function as return********This is where the callback returns data to Parent Function.
console.log(evens); // if things are working right, this will return [2,4,6].


var array = [3,4,5];
_.map(array, function callback(x){return x * 5;});
                                //this is the return to pass data back to PF from CB
// _.map(array, (x) => x * 5);
    // ********Above is arrow function format
console.log(array);
// _.filter(array, function(x){return x > 20;})
":"            _.filter(array, x => x > 20);
console.log(array);
// Hints
// Look at _.filter when it is invoked
// -- How many arguments was _.filter passed?
// -- What are those arguments? A: An array and a callback;
// -- If you had to classify them, what names would you give each of them?
// -- Given your answers(especially #3), place those names into your filter as parameters
// Use what you learned in previous chapter about callbacks and delegation to complete the assignment.\

// +++++++One important concept that we want you to learn through this assignment is how to pass data to and from callbacks. +++++++++++


// ************You pass data to a callback with a parameter and you pass data from the callback back to the parent function with a return. ****************

// Each method’s functionality is described here: underscore.js.
// Note that your method does not have to be as robust as underscore’s you just need to get the base functionality working.

//**** Therefore for most methods, you will only have the array and a callback as parameters and for the callback, you will pass in each element and potentially a “memo” also known as a “collector”.
