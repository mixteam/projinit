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
		example : false,
		folders : ['dist', 'src', 'examples'],
		files : ['./package.json', './README.md', './seajsConf.js', './.monitor', './index.html', './src/helloworld.js']
	}
	;

process.on('uncaughtException', function (err) {
  util.error('Caught exception: ' + err);
});

function buildFolder(dir, name) {
	var p = path.join(dir, name);
	
	fs.mkdirSync(p, '0644');
	util.debug('build "' + name + '" folder success');
}

function copyFile(dir, name, example) {
	var srcPath = path.join(__dirname, '../project', path.basename(name)),
		targetPath = path.join(dir, name),
		srcText = fs.readFileSync(srcPath, 'utf8')
		;

	fs.writeFileSync(targetPath, srcText, 'utf8');
	util.debug('copy "' + name + '" file success');
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

	opt.folders.forEach(function(f) {
		buildFolder(opt.dir, f);
	});

	opt.files.forEach(function(f) {
		copyFile(opt.dir, f, opt.example);
	});

	spmBuild(opt.dir);
}


if (require.main === module) {

	var argv = process.argv.slice(2)
		;

	while (argv.length > 0) {
		var v = argv.shift();
		switch(v) {
			case '-ex' :
			case '--example' :
				options.example = true;
			default:
				options.dir = v;
				break;
		}
	}

	initialize(options);
} else {
	module.exports = initialize;
}