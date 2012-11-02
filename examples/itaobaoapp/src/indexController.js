define(function(require, exports, module) {
	var	navigator = require('navigator').singleton,

		// 加载route
		IndexRoutes = require('./indexRoute'),	
		// 加载view
		IndexView = require('./indexView')
		;

	// 为navigator中托管controller，并为其添加View
	return navigator.depositController('index', IndexRoutes, IndexView);
});