function XO(str) {
  var x = str.toLowerCase()
  x = x.split('');
  var i = 0;
  var len = x.length;
  var countO = 0;
  var countX = 0;
  while ( i < len ) {
  
    if ( x[i] === "x" ) {
    countX++
    } else if ( x[i] === "o" ) {
    countO++
    };
    i++
    };
    
    if ( countO === countX ) {
    return true } else {
    return false}
}
