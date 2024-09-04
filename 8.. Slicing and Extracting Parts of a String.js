// slicing charecters from string
// all string stats from value(index) 0 
//  "M a n v i t h a"   total charcter in String manvitha is = 8
//   | | | | | | | |
//   0 1 2 3 4 5 6 7  ----->index value

 var myname="manvitha";
 myname.length;  // display the length of the variable 8

//  slice is a function
// Word.slice(x,y) ------- steucture to write slice function
 myname.slice(0,1)  //----->display the ans "M"

// the consider the  
    myname.slice(2,7) //---  "nvith"   
//               | |
//  lower bound _| |_ upper bound

//  the will  take the lower bounde index value and take till the upper bound  value and 
//  not consider the  upper  bound value


// example program:

var sentence = prompt("enter  block of sentenses");
var first10lettes =sentence.slice(0,11);
alert("user entered sentence: \n"+sentence+ "\n"+"we can select only 10 letters:\n"+first10lettes)




// output:
// user entered sentence:
// Manvitha shettigar
// we can select only 10 letters:
// Manvitha sh




