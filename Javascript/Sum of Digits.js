function digital_root(n) {
  var rootify = n.toString().split("");

    for ( var i = 0 ; i < rootify.length ; i ++ ) {
      rootify[i] = parseInt(rootify[i]);
    };
    rootify = rootify.reduce( function(a,b) { return a+b } )
    
    // if answer is more than or equal to 10, do it again
  if ( rootify < 10 ) { 
    return rootify;
  } else {
  
    rootify = rootify.toString().split("");
  
    for ( var i = 0 ; i < rootify.length ; i ++ ) {
      rootify[i] = parseInt(rootify[i]);
    }
      rootify = rootify.reduce( function(a,b) { return a+b } )
    }
  return rootify
  
}

// now I learned how to use map and reduce properly
