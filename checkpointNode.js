        //Hello World

//var http = require("http");
// console.log("HELLO WORLD");


        // Baby Steps
// let sum = 0
// const tab=process.argv
// for (let index = 2; index < (process.argv).length; index++) {
//      sum = sum+ Number(process.argv[index])
// }
// console.log(sum)


        // My First I/O
// let fs = require('fs');
// var contents = fs.readFileSync(process.argv[2]);
// var lines = contents.toString().split('\n').length - 1;
// console.log(lines);

        // My First Async I/O
// var fs = require('fs');
// var file = process.argv[2];
// fs.readFile(file, function (err, contents) {
//     var lines = contents.toString().split('\n').length - 1;
//     console.log(lines)
// });

        // Filtered Ls
// var fs = require('fs');
// var path = require('path');
// fs.readdir(process.argv[2], function (err, list) {
//     list.forEach(function (file) {
//         if (path.extname(file) === '.' + process.argv[3]) {
//             console.log(file);
//         }
//     });
// });

        // Http Client
var http = require('http');
http.get(process.argv[2], function (response) {
    response.setEncoding('utf8');
    response.on('data', console.log);
    response.on('error', console.error);
});