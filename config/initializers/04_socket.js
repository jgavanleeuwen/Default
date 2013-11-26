var io = require('socket.io');
var socket_config = require('../config.json').socketio;

module.exports = function() {
	this.io = io.listen(socket_config.port);
};