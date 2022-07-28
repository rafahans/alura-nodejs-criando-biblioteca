// const chalk = require("chalk");
// const fs = require("fs");

var chalk = import('chalk');
var fs = import('fs');

//const pathToFile = './files/';

//console.log(pathToFile);

function errorHandler (err){
	throw new Error(chalk.red(err));
}

function getFile(pathToFile){
	const enconding = 'utf-8';
	fs.readFile(pathToFile, enconding, (err, data) => {
		if(err) {
			errorHandler(err);
		}
		console.log(chalk.green(data));
	})
}

getFile("./files/");
