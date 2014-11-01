var concat = require('concat-stream');

process.stdin.pipe(concat(function(data) {
    var txt = data.toString();
    var reverse = "";
    for (var i = txt.length - 1; i >= 0; i--) {
        reverse += txt.charAt(i);
    }
    console.log(reverse);
}));
