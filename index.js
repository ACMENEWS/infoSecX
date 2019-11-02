'use strict';

// Project Information
//      InfoSeCollabo
// Inspiration of this project name
//      https://en.wikipedia.org/wiki/Information_security
//      https://www.youtube.com/watch?v=tUvF7yj531A
// Usage
// 
// Misc
//
// Notes
//  https://nodejs.org/api/dns.html
// note the serious differences between calls
// at the very bottom under "Implementation considerations"
// Developers looking to perform name resolution in the same way that other applications on the same operating system behave should use dns.lookup().
//  eg dns.lookup uses host table and other resources!!!  
// UDP (syslog for example, though there are probably libraries one should use for secure syslog
// 					https://www.w3schools.com/nodejs/ref_dgram.asp
// Newer clustering support (Multiple core usage: 
//					https://www.w3schools.com/nodejs/ref_cluster.asp )
// async   			https://www.npmjs.com/package/async
// express 			https://www.npmjs.com/package/express
// stix 			https://docs.google.com/document/d/1nK1RXcE2aMvQoG1Kgr3aTBtHZ1IyehzOk7vU0n5FUGY/pub
//      			https://oasis-open.github.io/cti-documentation/resources
//      			https://oasis-open.github.io/cti-documentation/stix/intro
// IBM API SDK  	https://developer.ibm.com/apiconnect/   (Also see loopback)
// SHODAN   		https://www.npmjs.com/package/shodan-client
// KOA   			https://github.com/koajs/koa
// SEPM API 		https://apidocs.symantec.com/home/saep

// routes
// examples:
//   Simple DNS A record query lookup which covers IPv4 and IPv6
// 		http://localhost:41340/api/v1/dns?q=yahoo.com
//
//   examples:
//		http://localhost:41340/api/v1/dns?q=acmenews.com
//		http://localhost:41340/details
//		http://localhost:41340/exit
 
;(function() {
	var infoSecX = require('./dist/app/app.js');
	var _infoSecX = infoSecX;
module.exports = _infoSecX;
})();