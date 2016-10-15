var vampire_test = function(a, b){
  if ( a <= 0 && b <= 0 ) {
    return false
  };
  
  a = Math.abs(a);
  b = Math.abs(b);
  var product = a * b;
  var absProduct = product.toString();
  var splitProduct = absProduct.split("");
  
  var aString = a.toString();
  var bString = b.toString();
  var abString = aString + bString ;
  var splitAB = abString.split("");
  
  for ( var i = 0 ; i < splitProduct.length ; i++ ) {
    if ( splitAB.indexOf(splitProduct[i]) !== -1 ) {
      splitAB[splitAB.indexOf(splitProduct[i])] = "";
      splitProduct[i] = "";
    } else {
    return false 
    }
  }
  if ( splitAB.join("") === "" && splitProduct.join("") === "" ){
  return true
  } else {
  return false
  };
}
