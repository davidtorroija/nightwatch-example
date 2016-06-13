colors = require('colors')

module.exports = function(){
	/* jshint expr: true */
	timeout = 1;


	urls = {
		// transferLanding: landing
	};
	if (!process.env.NODE_ENV){
		urls.transferLanding = 'url1'
	}
	else{
		urls.transferLanding = 'pepe'
	}


	return {
	    urls: urls
	};

};