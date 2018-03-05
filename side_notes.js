//-------javaScript------return largest number in each array------------------------------
function largestOfFour(arr) {
  var results = [];
  for (var i = 0; i < arr.length; i++) {
    var largestNumber = arr[i][0];
    for (var x = 1; x < arr[i].length; x++) {
      if (arr[i][x] > largestNumber) {
        largestNumber = arr[i][x];
      }
    }

    results[i] = largestNumber;
  }

  return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//---------jQuery-------return largest number in each array------------------------------
function largestOfFour(arr) {
  var large = [];
 for (var i = 0 ; i < arr.length ; i++){
   large.push(Math.max(...(arr[i])));
 }
    console.log(large);
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


//-----------------------------------------------------------------------------------------