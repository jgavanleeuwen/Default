var mongoose = require('mongoose');

module.exports = function() {
	
	mongoose.connect('mongodb://localhost/default', function(err) {
		if(!err) {
			console.log('   info  -'.cyan + ' mongoose started');
		}
	});

};
