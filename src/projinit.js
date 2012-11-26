#!/usr/bin/env node
// -*- js -*-

var fs = require("fs"), 
	path = require("path"),
	util = require('util'),
	exec = require('child_process').exec,

	VERSION = '0.2.0'

	options = {
		dir : './',
		ex_path : './examples',
		type : 'project',
		params : {}
	}
	;

// process.on('uncaughtException', function (err) {
//   util.error('Caught exception: ' + err);
// });

function replaceParams(str) {
	var opt = options,
		params = opt.params
		;

	for (var k in params) {
		str = str.replace(new RegExp('\\{\\{' + k + '\\}\\}', 'g'), params[k]);
	}

	return str;
}

function createFolder(path) {
	if (fs.existsSync(path)) {
		util.log(path + '" folder already exist');
	} else {
		fs.mkdirSync(path, '0777');
		util.log('init "' + path + '" folder success');
	}
}

function copyFile(target, src) {
	var text = replaceParams(fs.readFileSync(src, 'utf8'))
		;

	fs.writeFileSync(target, text, 'utf8');
	util.log('init "' + target + '" file success');
}

function copyFolder(_target, _src) {
	var opt = options
		;

	fs.readdir(_src, function(err, files) {
		files.forEach(function(file) {
			if (file.match(/^\.+/)) return;

			var src = path.join(_src, file),
				target = path.join(_target, replaceParams(file)),
				stat = fs.statSync(src)
				;

			if (stat.isFile()) {
				copyFile(target, src);
			} else if (stat.isDirectory) {
				createFolder(target);
				copyFolder(target, src);
			}
		});
	});
}

function initialize() {
	var opt = options,
		params = opt.params,
		expath = path.join(__dirname, '../', opt.ex_path, opt.type)
		;

	params.fullname = params.fullname.replace('\\', '/');
	params.name = params.fullname.split('/').pop();
	params.Name = params.name.replace(/^\w/, function(match) {return match[0].toUpperCase()});

	copyFolder(opt.dir, expath);
}

function main(args) {
	var opt = options,
		params = opt.params

	if (args && args instanceof Array){
		while (args.length > 0) {
			var v = args.shift();
			switch(v) {
				case '-ex':
				case '--example':
					opt.type = params.fullname = args.shift();	// 兼容0.1.0的api
					break;
				case '-p' :
				case '--project' :
					opt.type = 'project';
					params.fullname = args.shift();
					break;
				case '-a' :
				case '--app' :
					opt.type = 'app';
					params.fullname = args.shift();
					break;
				case '-d' :
				case '--dir' :
					opt.dir = v;
					break;
				case '-v':
				case '--version':
					util.print('version ' + VERSION);
					process.exit(0);
				default:
					util.print('usage: project [options] fullname');
					process.exit(0);
					break;
			}
		}
	}else if (args && typeof args === 'object') {
		for (var k in args) {
			options[k] = args[k];
		}
	}

	initialize();
}


if (require.main === module) {
	main(process.argv.slice(2));
} else {
	module.exports = main;
}