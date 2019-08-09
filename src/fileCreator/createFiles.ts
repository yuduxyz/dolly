import * as fs from "fs-extra";
import * as path from "path";
import * as vscode from "vscode";

export function createFiles(inDirectory: string): Promise<void> {
  const configuration = vscode.workspace.getConfiguration("dolly");
  const templatePath = configuration.get("templatePath") as string;
  const absTemplatePath = path.join(vscode.workspace.rootPath as string, templatePath);
  const newFolderName = configuration.get("newFolderName") as string;

  return new Promise((resolve, reject) => {
    fs.copy(absTemplatePath, path.join(inDirectory, newFolderName), (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}
