function largestOfFour(arr) {
//empty array
  var largestArray = [];
  
  //loop through adding number to largestNumber
  for(var i= 0; i < arr.length; i++){
    var largestNumber = 0;
    //Placeholder to find the largestNumber
    
    //loop to find largestnumber
    for (var j=0; j<arr[i].length; j++){
      if(largestNumber < arr[i][j]){
        largestNumber=arr[i][j];
      }
    }
    //adding the largest numbers to an array
    largestArray.push(largestNumber);
  }
  return largestArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);