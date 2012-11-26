define(function(require, exports, module) {
	var	navigator = require('navigator').singleton,

		// 加载route
		{{Name}}Routes = require('./{{name}}Route'),	
		// 加载view
		{{Name}}View = require('./{{name}}View')
		;

	// 为navigator中托管controller，并为其添加View
	return navigator.depositController('{{name}}', {{Name}}Routes, {{Name}}View);
});