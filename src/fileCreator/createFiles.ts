import * as fs from 'fs-extra'
import * as path from 'path'
import * as vscode from 'vscode'

export function createFiles(inDirectory: string): Promise<void> {
  const configuration = vscode.workspace.getConfiguration('dolly')
  const templatePath = configuration.get('templatePath') as string
  const absTemplatePath = path.join(vscode.workspace.rootPath as string, templatePath)
  const newFolderName = configuration.get('newFolderName') as string

  return new Promise((resolve, reject) => {
    fs.copy(absTemplatePath, path.join(inDirectory, newFolderName), function (err) {
      if (err) {
        console.log('An error occured while copying the folder.')
        reject(err)
        return
      }
      console.log('Copy completed!')
      resolve()
    })
  })
}