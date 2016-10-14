function presses(phrase) {
  // To do...
  phrase = phrase.toUpperCase() // turn all letters to upper case
var clicks = {
1 : ["A","D","G","J","M","P","T","W"," ","*","#","1"],
2 : ["B","E","H","K","N","Q","U","X","0"],
3 : ["C","F","I","L","O","R","V","Y"],
4 : ["S","Z","2","3","4","5","6","8"],
5 : ["7","9"]
} // object of each numbers of click
 
  var splitPhrase = phrase.split(""); // splitting phrase into an array of strings
  var answer = 0; // answer variable
  for ( var i = 0 ; i < splitPhrase.length ; i++ ) { // for each splitPhrase[i] 
       var letter = splitPhrase[i];
       var clickCounter = 1;
       while ( clicks[clickCounter].indexOf(letter) === -1 ) {
              clickCounter++
              }; // add 1 to clickcounter until indexOf finds the letter
       answer = answer + clickCounter // add amount of clickCounter to the answer, then repeat
       };
  return answer;
}
