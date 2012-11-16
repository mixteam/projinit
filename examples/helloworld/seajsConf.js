(function() {
	var DEBUG = true;

	function debugVersion(uri) {
		return uri + (DEBUG ? '-debug' : '');
	}

	seajs.config({
		base : 'path_to_spm_source',
		alias : {
			'helloworld' : debugVersion('mix/demos/helloworld/1.0.0/helloworld')
		},
		debug : DEBUG
	});
})();