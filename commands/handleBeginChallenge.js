const vscode = require('vscode');
const path = require('path');
const fs = require('fs');

/**
 * @param {any} _name
 */
function handleBeginChallenge(_name) {
    
    const panel = vscode.window.createWebviewPanel(
        'BeginChallenge',
        'Begin Challenge',
        vscode.ViewColumn.One,
        {
            enableScripts: true
        }
    );

    vscode.window.showInformationMessage(`Hey ${_name}`);

    const htmlpath = path.join(__dirname,'..', 'public', 'BeginChallenge.html'); // Ensure correct path

    const htmlContent = fs.readFileSync(htmlpath, 'utf8');

    panel.webview.html = htmlContent;
}

module.exports = { handleBeginChallenge };
