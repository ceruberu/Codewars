Math.round = function(number) {
  var numberstring = number.toString(); // turn number into string
  var splitstring = numberstring.split("."); // split the string by .
  if ( splitstring[1] >= 10 ) {
      splitstring[1] = splitstring[1][0]
    } // if the second string is more than 10, only get the first digit
  if ( splitstring[1] >= 5 ) {
    splitstring[0] ++ 
    return parseInt(splitstring[0]) // if the first digit is more than or equal to 5, plus one to first string 
  } else {
    return parseInt(splitstring[0])
  }
};

Math.ceil = function(number) {
  var numberstring = number.toString();
  var splitstring = numberstring.split(".");
  if ( splitstring[1] > 0 ) {
    splitstring[0] ++ 
    return parseInt(splitstring[0])
  } else {
    return parseInt(splitstring[0])
  }
};

Math.floor = function(number) {
  var numberstring = number.toString();
  var splitstring = numberstring.split(".");
  if ( splitstring[1] > 0 ) {
    splitstring[0] 
    return parseInt(splitstring[0])
  } else {
    return parseInt(splitstring[0])
  }
};
