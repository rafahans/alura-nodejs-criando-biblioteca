const chalk = import('chalk');
const fs = import('fs');

const pathToFile = './files/text1.md';

console.log(pathToFile);

function errorHandler (err){
	throw new Error(chalk.red(err));
}

function getFile(pathToFile){
	const enconding = 'utf-8';
	fs.readFile(pathtoFile, enconding, (err, data) => {
		if(err) {
			errorHandler(err);
		}
		console.log(chalk.green(data));
	})
}

getFile(pathToFile);
