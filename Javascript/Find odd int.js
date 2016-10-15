function findOdd(A) {
  var aSort = A.sort((a, b) => a - b ); // sort A by increasing to decreasing
  for ( var i = 0 ; i < aSort.length ; i++ ) {
     
     var checking = aSort.lastIndexOf(aSort[i]) - aSort.indexOf(aSort[i])
     if ( checking % 2 === 0 ) {
     return aSort[i]
     } // find last and first index of an integer and substract them, if the result is even it is odd
  }
}
