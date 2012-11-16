define(function(require, exports, module) {
	var	navigator = require('navigator').singleton,

		// 加载route
		HellowRoute = require('./route'),	
		// 加载view
		HelloView = require('./view')
		;

	// 为navigator中托管controller，并为其添加View
	return navigator.depositController('hellomix', HellowRoute, HelloView);
});