define(function(require, exports, module) {
	var View = require('view'),
		{{Name}}View = {}										// TODO 请修改
		;

	// 一些配置项，包括加载模版和样式的地址
	{{Name}}View.CONFIGS = {
		name : '{{name}}View',									// TODO 请修改
		viewport : '#screen-wrap',								// TODO 请修改
		loadTmpl : 'apps/{{name}}/assets/{{name}}View.mu',		// TODO 请修改
		loadStyle : 'apps/{{name}}/assets/{{name}}View.less'	// TODO 请修改
	}
	
	// 视图对象的私有变量
	{{Name}}View.ATTRS = {
		// 键 : 值，可以用this.get/setAttr来访问
	}


	// 绑定视图模版的消息事件
	{{Name}}View.EVENTS = {
		// 消息名 : 方法或方法名，当获取到某消息后，会触发对象的方法
	}
	
	// 绑定视图模版的DOM事件
	{{Name}}View.ATTACH = {
		// 选择器 : { dom事件 : 句柄函数 }
	}
	
	// 匹配某路由后，对应执行的方法
	{{Name}}View.ROUTES = {
		// 路由名 : 方法或方法名
		'{{name}}View' : 'render{{Name}}'						// TODO 请修改
	}

	// 视图模版的数据
	{{Name}}View.DATA = {
		// 键 : 值，可以用this.get/setData来访问
	}
	
	// 视图模版的组件数据
	{{Name}}View.COMPDATA = {
		// 键 : 值，可以用this.get/setCompData来访问
	}


	// 视图模版的方法
	Object.extend({{Name}}View, {
		// 键 : 方法
		render{{Name}} : function() {
			// TODO
			alert('render it');
		}
	});

	// 导出View的一个子类
	module.exports = View.extend({{Name}}View);
});