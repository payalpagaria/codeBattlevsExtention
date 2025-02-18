
const vscode = require('vscode');
const path = require('path');
const fs = require('fs');

const {handleBeginChallenge}=require('./handleBeginChallenge')
 function handleBattle(){

	vscode.window.showInformationMessage('Hey Join the battle');
	const panel = vscode.window.createWebviewPanel(
        'JoinBattle',
        'Join Battle',
        vscode.ViewColumn.One,
        {
			enableScripts:true
		}
      );
      const htmlpath = path.join(__dirname, '..', 'public', 'JoinFom.html'); 
	  const htmlContent = fs.readFileSync(htmlpath, 'utf8');

	panel.webview.html =  htmlContent;
	panel.webview.onDidReceiveMessage(
        (message) => {
			
            if (message.command === 'joinBattle') {
                vscode.window.showInformationMessage(`Joining Battle: ${message.name} with Code: ${message.code}`);
                console.log("Received from Webview:", message);
				handleBeginChallenge(message.name)
            }
        },
        undefined,
        []
    );
}
module.exports = { handleBattle };
