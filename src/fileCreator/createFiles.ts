import * as fs from 'fs-extra'
import * as os from 'os'
import * as path from 'path'
import * as vscode from 'vscode'

export async function createFiles (inDirectory: string): Promise <void> {
  const templatePath = vscode.workspace.getConfiguration('dolly').get('templatePath') as string[]
  const absTemplatePath = path.join(vscode.workspace.rootPath as string, templatePath[0])

  fs.copy(absTemplatePath, path.join(inDirectory, './children'), function (err) {
    if (err) {
        console.log('An error occured while copying the folder.')
        return console.error(err)
    }
    console.log('Copy completed!')
});
}