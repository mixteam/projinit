define(function(require, exports, module) {
	var View = require('view'),
		HelloView = {}
		;

	// 一些配置项，包括加载模版和样式的地址
	HelloView.CONFIGS = {
		name : 'helloview',
		viewport : '#screen-wrap',
		loadTmpl : 'apps/hellomix/assets/view.mu',
		loadStyle : 'apps/hellomix/assets/view.less'
	}

	// 设置匹配的某路由后，对应执行的方法
	HelloView.ROUTES = {
		'hellomix' : 'renderHelloMIX'
	}


	Object.extend(HelloView, {
		renderHelloMIX : function() {
			// 追加一个success文本
			var text = document.createTextNode('--awesome!');
			document.body.appendChild(text);
		}
	});

	// 导出View的一个子类
	module.exports = View.extend(HelloView);
});