'use strict';

//  Add Symantec SEPM SEPC cloud API et al 
//   https://apidocs.symantec.com/home/SEPC
module.exports = (function() {
	const config = require('config');
	// does this mean I am reading in the config upon each execution of externalRoutes.js.js
	const _C = Object.freeze( config.get('INFOSECX'));
	// use the values from _C to obtain configuration data.

	// need to detect the existance of Object.isFrozen.   TODO 
	if (!Object.isFrozen(_C)) {
		console.log("Node is too old, please update.");
		exit;
	}

	const _nonce = require('nonce');

    'use strict';
    var externalRoutes = require('express').Router();

    externalRoutes.get('/', function (request, response) {
        response.send('Hello ExternalRoutes!');
    });
	
	// URL becomes http://localhost:41340/externalRoutes/someRoute?
    externalRoutes.get('/someRoute', function (request, response) {
        response.send('Hello SomeRoute!');
    });


	//  IBM XFE IAP API
	//    Get Application Threat Intelligence (example, ask for facebook)
	// TODO -- while calling this works, the entire externalizing the function is not complete.
	// curl "http://localhost:41340/api/v2/xfe/iap?q=8.8.8.8"
	
	externalRoutes.get('/xfe/iap', (request, response) => {  			
		xfeIap(request, response); 
	});
		
//   the following functionss should be moved into individual included modules.		 
	 var xfeIap = function (req, res) {
							var queryString = req.query;	
							// This app began life prior to NodeJS v 1.x.    It needs updated to support best practices
							var xfe = require("xfe");
							var xfeClient = new xfe(_C.XFESETTINGS.apiusername.toString() , _C.XFESETTINGS.apipassword.toString());
							
							console.dir(queryString);
			 

							xfeClient.iap.get(queryString.q.toString()).then(function(response2) {
								//response.status(200).send(addresses);
								 console.log(response2);
									var ztag = new _nonce()();
									console.log('ztag',ztag);
									res.status(200).json(
										{
											question: {
												queryString
											},
											answer: {
												'response':response2, 								 
												'ztag': ztag 
											}
										}
									);				
								}); 
			};
		
    return externalRoutes;
})();