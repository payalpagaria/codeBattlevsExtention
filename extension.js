// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const path = require('path');
const fs = require('fs');
const {handleBattle}= require('./commands/handleBattle')
const {handleBeginChallenge}=require('./commands/handleBeginChallenge')
const axios=require('axios')
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "codebattle" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('codebattle.helloWorld', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello vs Code');
	});
	const data1 = vscode.commands.registerCommand('codebattle.fetchdata', 
	async function () {
		try {
			const res= await axios.get('http://localhost:8000/');
			if(res){
				vscode.window.showInformationMessage(res.data.message);

			}

		} catch (error) {
			vscode.window.showInformationMessage(error);

		}
	});
	const battleText=vscode.commands.registerCommand('codebattle.heyJoin',handleBattle)
	const beginBattle=vscode.commands.registerCommand('codebattle.beginChallenge',handleBeginChallenge)

	context.subscriptions.push(disposable,battleText,beginBattle,data1);
}



// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate,

}
