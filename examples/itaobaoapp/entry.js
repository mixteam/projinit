(function() {
	function debugVersion(uri) {
		return uri + (seajs.debug ? '-debug' : '');
	}

	seajs.use(debugVersion('itaobao/apps/index/0.1.0/indexController'));
})();
