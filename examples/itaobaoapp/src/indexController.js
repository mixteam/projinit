define(function(require, exports, module) {
	var routes = require('./indexRoute'),	// 加载route
		navigator = require('navigator').singleton,

		// 加载Controller类
		Controller = require('controller'),
		// 加载HelloView类
		IndexView = require('./indexView'),

		indexController
		;

	// 初始化hellomix的controller实例，并添加HelloView
	indexController = new Controller('index', {routes : routes}),
	indexController.addView(IndexView);

	// 为navigator中添加controller
	navigator.addController(indexController);
});