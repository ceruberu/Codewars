function findUniq(arr) {
  var foo = {}
  arr.forEach(function(item){
    if(!foo[item]){
      foo[item] = 1;
    } else {
      foo[item]++;
    }
  })
  for(var key in foo){
    if (foo[key] === 1 ){
      return parseFloat(key);
    }
  }
  
}
