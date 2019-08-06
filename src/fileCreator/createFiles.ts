import * as fs from 'fs-extra'
import * as path from 'path'
import * as vscode from 'vscode'

export function createFiles(inDirectory: string): Promise<void> {
  const templatePath = vscode.workspace.getConfiguration('dolly').get('templatePath') as string[]
  const absTemplatePath = path.join(vscode.workspace.rootPath as string, templatePath[0])

  return new Promise((resolve, reject) => {
    fs.copy(absTemplatePath, path.join(inDirectory, './children'), function (err) {
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