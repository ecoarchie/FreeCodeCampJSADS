// Check For Mixed Grouping of Characters

let myString = "Eleanor Roosevelt";
let myRegex = /(Eleanor|Franklin).*\sRoosevelt/;
let result = myRegex.test(myString);
