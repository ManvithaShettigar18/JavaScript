// lower case to upper case:
   var Name ="manvitha"
    Name.toUpperCase();

// output: 'MANVITHA'

// if you want to apply the  uppercased string name then write
Name= Name.toUpperCase();
//  old Name  variavble value= "manvitha" is replaced with  'MANVITHA'





// upper to lowercase

var Name2= "MANVItha"
Name2.toLowerCase();

//output:'manvitha'




// Example program:
// i want the final result as Manvitha, M should upper case rest are in lower case
var Name=prompt("hey dude enter your name");

// "m"to get first letter we apply slice function
var firstLetter= Name.slice(0,1);

// convert this "m" into upper case
var  upperFirst= firstLetter.toUpperCase();

//slice  "anvitha" from name
var secondLetter= Name.slice(1,8);
 var secondLower= secondLetter.toLowerCase();
alert(upperFirst+secondLower);

// your given input: ManViTHA
// output is:Manvitha
