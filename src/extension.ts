// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as fs from "fs-extra";
import * as path from "path";
import * as vscode from "vscode";

import { createFiles } from "./fileCreator";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const disposable = vscode.commands.registerCommand("extension.dolly", async (e: vscode.Uri) => {
    // The code you place here will be executed every time your command is executed

    let directoryPath = (e && e.fsPath) ? e.fsPath : vscode.workspace.rootPath || "";
    if (!(await fs.stat(directoryPath)).isDirectory()) {
      directoryPath = path.dirname(directoryPath);
    }

    try {
      await createFiles(directoryPath);
      vscode.window.showInformationMessage("创建成功");
    } catch (e) {
      vscode.window.showErrorMessage(e.message);
    }
  });

  context.subscriptions.push(disposable);
}
