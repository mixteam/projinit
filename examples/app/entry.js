(function() {
	var DEBUG = true;

	function debugVersion(uri) {
		return uri + (DEBUG ? '-debug' : '');
	}

	seajs.use(
		debugVersion('{{fullname}}/0.1.0/{{name}}Controller'), // TODO 请修改
		function(contro) {
			contro.trigger('install');
		}
	);
})();
