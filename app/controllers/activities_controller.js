var locomotive = require('locomotive');
var Controller = locomotive.Controller;
var _	= require('underscore');
var Activity = require('../models/activity');

var ActivitiesController = new Controller();
var output;

ActivitiesController.before('*', function(next) {
	output = [];
});

ActivitiesController.index = function() {

	var self = this;
	
	Activity.find({ date: { $gte: moment().subtract('hours', 24) }}, null, { sort: { date : -1 }}, function(err, activities) {
		if (!err) {
			self.output = activities;
			self.respond({
				'json': { template: 'index' },
				'html': { template: 'index' },
				default: { format: 'html' }
			});
		}
	});

};

ActivitiesController.after('*', function(next) {
	output = null;
	next();
});

module.exports = ActivitiesController;
