'use strict';

var s = 'Hello';

function greet(name) {
    for (let i=0;i<10;i++){
    console.log(s + ', ' + name + '!');
    }
}



module.exports = greet;