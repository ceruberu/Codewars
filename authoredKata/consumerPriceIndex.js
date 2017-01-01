function CPI (data, consumer, start, end) {
  var startYear = data[start];
  var endYear = data[end]
  var consumerObj = {}
  var basket = consumer.split(', ').map(function(item){
    item = item.split(' ');
    return item;
  });
  var startPrice = basket.slice();
  var endPrice = basket.slice();
  startPrice = startPrice.map(function(item){
    item = item[0] * startYear[item[1]]
    return item;
  });
  
  endPrice = endPrice.map(function(item){
    item = item[0] * endYear[item[1]]
    return item;

  });
  
  startPrice = startPrice.reduce(function(a,b){
    return a+b;
  })
  
  endPrice = endPrice.reduce(function(a,b){
    return a+b;
  })
  return Math.round( (endPrice/startPrice * 100 -100 )*100)/100
}
