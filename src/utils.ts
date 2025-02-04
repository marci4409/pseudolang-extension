import * as vscode from 'vscode';

export function prepareCompletionItems(
  instructions: {
    kind: vscode.CompletionItemKind;
    label: string;
    detail: string;
    insertText?: vscode.SnippetString;
  }[]
) {
  return instructions.map((instruction) => {
    const item = new vscode.CompletionItem(instruction.label, instruction.kind);
    item.detail = instruction.detail;
    if (instruction.insertText) {
      item.insertText = instruction.insertText;
    }
    return item;
  });
}
