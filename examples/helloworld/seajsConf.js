(function() {
	var DEBUG = true;

	function debugVersion(uri) {
		return uri + (DEBUG ? '-debug' : '');
	}

	seajs.config({
		base : 'localhost',
		alias : {
			'helloworld' : debugVersion('mix/demos/helloworld/1.0.0/helloworld')
		},
		debug : DEBUG
	});
})();