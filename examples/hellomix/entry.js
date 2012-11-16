(function() {

	seajs.use(
		'mix/demos/helloworld/apps/hellomix/0.1.0/controller-debug',
		function(contro) {
			contro.trigger('install');
		}
	);
})();	