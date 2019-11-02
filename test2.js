"use strict";
const dns = require('dns');
var xxx = dns.getServers();
console.dir(xxx);


var Events = require('events');
var emitter = new Events.EventEmitter();

var validateObject = function (a) {
    if (typeof a !== 'object') {
        emitter.emit('error', new Error('Invalid object'));
    }
};

//  https://nodejs.org/api/events.html

emitter.on('error', function (err) {
    console.log('Emitted: ' + err.message);
});

validateObject('123');


//const fetch=require('fetch');
//async function f() {

//  try {
//    let response = await fetch('http://no-such-url');
//  } catch(err) {
//    alert(err); // TypeError: failed to fetch
//  }
//}

//f();

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');

