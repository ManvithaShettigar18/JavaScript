// to find length we use .length 
var name=" manvitha";
 name.length;



//  small example program:
// user inputed the sentence, there estimated  value 200 letters can use,
// charectes of sentencs will minus from estimated value and desplay the remaiing value
var sentence = prompt("enter  block of sentenses");
var astimated_Letters = 200;

var sentence_length = sentence.length;
typeof (sentence_length);

var remain = astimated_Letters - sentence_length;
console.log(remain);
alert(" you are already used "+sentence_length+" from "+astimated_Letters+
      " charecterstics and "+remain+"are remaind");