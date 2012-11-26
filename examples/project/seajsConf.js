(function() {
	var DEBUG = true;

	function debugVersion(uri) {
		return uri + (DEBUG ? '-debug' : '');
	}

	seajs.config({
		base : 'http://spm.assets.m.etao.net',
		alias : {
			'{{name}}' : debugVersion('{{fullname}}/0.1.0/{{name}}')
		},
		debug : DEBUG
	});
})();