// My role in the group is: Translate Pseudocode into Code

// Here is my part of the challenge:

// test by using node.  Instal it if you haven't already.
//
// 1. open terminal
// 2. navigate your way to the file's path by using bash commands ls and cd
// 3. once you're in the folder that holds the js file, type node gc1_initial_solution.js (or whatever its called).
// 4. see it fail, and try to fix it line by line by writing the following functions:

// write a function called sum, with an array parameter called arr
var sum = function(arr) {
    // initialize a variable integer called sum and set it equal to zero
	var sum = 0;
	// write a for loop that starts at index zero and ends at index array.length, incrementing by one each time
	for(var i = 0; i < arr.length; i++) {
		// set the sum equal to the array at the current index plus sum
		sum = sum + arr[i];
	// end the loop
	}
	// return sum
	return sum;
	// end function
}
// write a function called mean, with an array parameter called arr
var mean = function(arr) {
	// return the mean by calling the sum function that we wrote above, and pass in arr as its parameter. Divite this value by the length of the array
	return sum(arr)/arr.length;
// end function
};
//
// write a function called median, with an array parameter called array
var median = function(arr) {
	// sort array from smallest to biggest by using array.sort() built in function
	arr.sort();
	// create a variable called half and set it equal to the array length divided by 2 (make sure to Math.floor this value).
	var half = Math.floor(arr.length / 2);
	// if the array length is even, then return the integer in the middle of the array.  In other words, return array at index half.
	// if the array lenght is odd, then return the sum of the two middle integers divided my two.  In other words, return array at index half plus array at index half - 1, then divide that by 2
	return (arr.length % 2 == 1) ? (arr[half]) : ((arr[half] + arr[half - 1]) / 2);
};
// end function

// __________________________________________
// Tests:  Do not alter code below this line.


oddLengthArray  = [1, 2, 3, 4, 5, 5, 7]
evenLengthArray = [4, 4, 5, 5, 6, 6, 6, 7]


function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

// tests for sum
assert(
  (sum instanceof Function),
  "sum should be a Function.",
  "1. "
)

assert(
  sum(oddLengthArray) === 27,
  "sum should return the sum of all elements in an array with an odd length.",
  "2. "
)

assert(
  sum(evenLengthArray) === 43,
  "sum should return the sum of all elements in an array with an even length.",
  "3. "
)

// tests for mean
assert(
  (mean instanceof Function),
  "mean should be a Function.",
  "4. "
)

assert(
  mean(oddLengthArray) === 3.857142857142857,
  "mean should return the average of all elements in an array with an odd length.",
  "5. "
)

assert(
  mean(evenLengthArray) === 5.375,
  "mean should return the average of all elements in an array with an even length.",
  "6. "
)

// tests for median
assert(
  (median instanceof Function),
  "median should be a Function.",
  "7. "
)

assert(
  median(oddLengthArray) === 4,
  "median should return the median value of all elements in an array with an odd length.",
  "8. "
)

assert(
  median(evenLengthArray) === 5.5,
  "median should return the median value of all elements in an array with an even length.",
  "9. "
)