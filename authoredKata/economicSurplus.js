function equilibrium (supply, demand) {
  var variables = parseInt(supply) - parseInt(demand);
  var constants = -(parseInt(supply.split(' ')[1]) - parseInt(demand.split(' ')[1])); 
  var equiPrice = constants/variables;
  var equiQuantity = parseInt(supply)*equiPrice + parseInt(supply.split(' ')[1])
  var answer = [equiPrice, equiQuantity];
  return answer;
}

function producerSurplus (supply, demand) {
  var equiPoints = equilibrium(supply, demand);
  var equiPrice = equiPoints[0];
  var equiQuantity = equiPoints[1];
  var maxPrice = parseInt(supply.split(' ')[1]) / -(parseInt(supply));
  var answer = (equiQuantity*(equiPrice-maxPrice))/2;
  return Math.round(answer*100)/100;
}

function consumerSurplus (supply, demand) {
   var equiPoints = equilibrium(supply, demand);
   var equiPrice = equiPoints[0];
   var equiQuantity = equiPoints[1];
   var maxPrice = parseInt(demand.split(' ')[1]) / -(parseInt(demand));  
   var answer = (equiQuantity*(maxPrice-equiPrice))/2;
   return Math.round(answer*100)/100; 
}

