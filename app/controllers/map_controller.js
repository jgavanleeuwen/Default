var locomotive = require('locomotive');
var Controller = locomotive.Controller;

var MapController = new Controller();

MapController.show = function() {
	this.user = this.req.user;
  this.render();
};

module.exports = MapController;
