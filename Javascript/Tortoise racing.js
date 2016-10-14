function race(v1, v2, g) {

    if (v1>=v2) {
      return null // return null if v1 >= v2 because it cant catch up
    } else { 
    
      var answer = []; // save answers to this array
      var locationA = g; // starting position A
      var locationB = 0; //starting position B
      var countH = 0;
      
      while (locationA >= locationB) {
          locationA += v1;
          locationB += v2;
          countH++;
      }
      answer.push(countH-1) // count H
  
      locationA = locationA-v1
      locationB = locationB-v2
      var speedminA = v1/60;
      var speedminB = v2/60;
      var countM = 0;
      while (locationA >= locationB) {
          locationA += speedminA;
          locationB += speedminB;
          countM++;
      }
         answer.push(countM-1) // count M
  
      locationA = locationA-speedminA
      locationB = locationB-speedminB
      
      var speedsecA = speedminA/60;
      var speedsecB = speedminB/60;
      var countS = 0;
      while (locationA >= locationB) {
          locationA += speedsecA;
          locationB += speedsecB;
          countS++;
      }
        answer.push(countS-1) // count S
        return answer // return Answer
      }
}
