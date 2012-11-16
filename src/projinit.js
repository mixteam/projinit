#!/usr/bin/env node
// -*- js -*-

var fs = require("fs"), 
	path = require("path"),
	util = require('util'),
	exec = require('child_process').exec,

	VERSION = '0.1.0'

	options = {
		dir : './',
		examples_path : './examples',
		example : 'helloworld'
	}
	;

process.on('uncaughtException', function (err) {
  util.error('Caught exception: ' + err);
});

function createFolder(path) {
	fs.mkdirSync(path, '0777');
	util.debug('create "' + path + '" folder success');
}

function copyFile(targetPath, srcPath) {
	var text = fs.readFileSync(srcPath, 'utf8')
		;

	fs.writeFileSync(targetPath, text, 'utf8');
	util.debug('copy "' + srcPath + '" file success');
}

function copyFolder(projPath, exPath) {
	fs.readdir(exPath, function(err, files) {
		files.forEach(function(file) {
			if (file in ['.', '..']) return;

			var srcPath = path.join(exPath, file),
				targetPath = path.join(projPath, file),
				stat = fs.statSync(srcPath)
				;

			if (stat.isFile()) {
				copyFile(targetPath, srcPath);
			} else if (stat.isDirectory) {
				createFolder(targetPath);
				copyFolder(targetPath, srcPath);
			}
		});
	});
}

function initialize(opt) {
	var exPath = path.join(__dirname, '../', opt.examples_path, opt.example);

	copyFolder(opt.dir, exPath);
}

function main(args) {

	if (args && args instanceof Array){
		while (args.length > 0) {
			var v = args.shift();
			switch(v) {
				case '-ex' :
				case '--example' :
					options.example = args.shift();
					break;
				case '-v':
				case '--version':
					util.print('version ' + VERSION);
					process.exit(0);
				default:
					options.dir = v;
					break;
			}
		}
	}else if (args && typeof args === 'object') {
		for (var k in args) {
			options[k] = args[k];
		}
	}

	initialize(options);
}


if (require.main === module) {
	main(process.argv.slice(2));
} else {
	module.exports = main;
}