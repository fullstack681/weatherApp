var fs = require("fs");   
var path = require("path");

const inputfile1 = __dirname+"\\inputfile1.txt";

// console.log(inputfile1);
// const inputfile1_dir = inputfile1.dir;
// const inputfile1_base = inputfile1.base;
// console.log(__filename);
// console.log(__dirname);
    
fs.readFile(inputfile1, function (ferr, filedata) {   
    if (ferr) return console.error(ferr);   
    console.log(filedata.toString());   
});  
console.log("End of Program execution");   