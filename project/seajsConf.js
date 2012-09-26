(function() {
	var DEBUG = true;

	function debugVersion(uri) {
		return uri + (DEBUG ? '-debug' : '');
	}

	seajs.config({
		base : 'http://spm.assets.m.etao.net',
		alias : {
			'helloworld' : debugVersion('examples/helloworld/1.0.0/helloworld')
		},
		debug : DEBUG
	});
})();