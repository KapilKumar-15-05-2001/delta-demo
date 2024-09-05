'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
var fs = require('fs');
var path = require('path');
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    function writeFile(isInstall) {
        var base = path.dirname(require.main.filename);
        var dir = path.join(base, 'vs', 'workbench', 'electron-browser', "bootstrap");
        var indexPath = path.join(dir, "index.html");
        var extensionPath = vscode.extensions.getExtension("kangping.video").extensionPath;
        var newFilePath = null;
        var msg1 = "";
        var msg2 = "";
        if (isInstall) {
            newFilePath = path.join(extensionPath, "html", "index.html");
            msg1 = "Install Video  Error!";
            msg2 = "Install Video  Complete,Reset VsCode!";
        }
        else {
            newFilePath = path.join(extensionPath, "html", "index1.html");
            msg1 = "UnInstall Video  Error";
            msg2 = "UnInstall Video Complete,Reset  VsCode!";
        }
        try {
            fs.writeFileSync(indexPath, fs.readFileSync(newFilePath));
        }
        catch (err) {
            vscode.window.showInformationMessage(msg1 + err);
        }
        vscode.window.showInformationMessage(msg2);
    }
    vscode.commands.registerCommand('videoPlay.install', (e) => {
        writeFile(true);
    });
    vscode.commands.registerCommand('videoPlay.uninstall', (e) => {
        writeFile(false);
    });
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map