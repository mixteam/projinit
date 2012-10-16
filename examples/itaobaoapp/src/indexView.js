define(function(require, exports, module) {
	var View = require('view'),
		IndexView = {}
		;

	// 一些配置项，包括加载模版和样式的地址
	IndexView.CONFIGS = {
		name : 'indexView',
		loadTmpl : 'apps/index/assets/indexView.mu',
		loadStyle : 'apps/index/assets/indexView.less'
	}
	
	// 视图对象的私有变量
	IndexView.ATTRS = {
		// 键 : 值，可以用this.get/setAttr来访问
	}


	// 绑定视图模版的消息事件
	IndexView.EVENTS = {
		// 消息名 : 方法或方法名，当获取到某消息后，会触发对象的方法
		'indexView' : 'renderIndex'
	}
	
	// 绑定视图模版的DOM事件
	IndexView.ATTACH = {
		// 选择器 : { dom事件 : 句柄函数 }
	}
	
	// 匹配某路由后，对应执行的方法
	IndexView.ROUTES = {
		// 路由名 : 方法或方法名
	}

	// 视图模版的数据
	IndexView.DATA = {
		// 键 : 值，可以用this.get/setData来访问
	}
	
	// 视图模版的组件数据
	IndexView.COMPDATA = {
		// 键 : 值，可以用this.get/setCompData来访问
	}


	// 视图模版的方法
	Object.extend(IndexView, {
		// 键 : 方法
		renderIndex : function() {
			// TODO
			alert('render it');
		}
	});

	// 导出View的一个子类
	module.exports = View.extend(IndexView);
});