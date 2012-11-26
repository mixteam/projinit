define(function(require, exports, module) {
	var router = require('router').singleton,
		navigator = require('navigator').singleton
		;

	navigator.trigger('install');
	router.start();

	return 'router started';
});