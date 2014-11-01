var split   = require('split'),
    through = require('through');

var odd = true;

process.stdin
    .pipe(split())
    .pipe(through(function (line) {
        if(odd) {
            console.log(line.toString().toLowerCase());
        } else {
            console.log(line.toString().toUpperCase());
        }
        odd = !odd;
    }))
    .pipe(process.stdout);
