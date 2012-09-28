#!/usr/bin/env node
// -*- js -*-

var fs = require("fs"), 
	path = require("path"),
	util = require('util'),
	mu = require('./mustache'),
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
	fs.mkdirSync(path, '0644');
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

function spmBuild(dir) {
	exec('spm upload', {
		cwd : dir,
		encoding : 'utf8'
	}, function(error, stdout, stderr) {
		(error|| stderr) && util.error(error || stderr);
		stdout && util.debug(stdout);
	})
}

function initialize(opt) {
	var exPath = path.join(__dirname, '../', opt.examples_path, opt.example);

	copyFolder(opt.dir, exPath);
	spmBuild(opt.dir);
}


if (require.main === module) {

	function p(argv) {

		argv = (argv || process.argv).slice(2);

		while (argv.length > 0) {
			var v = argv.shift();
			switch(v) {
				case '-ex' :
				case '--example' :
					options.example = argv.shift();
					break;
				default:
					options.dir = v;
					break;
			}
		}

		initialize(options);
	}
} else {
	module.exports = p;
}