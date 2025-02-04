import * as vscode from 'vscode';
import { parseLine } from './keywords';
import { ParsedModule } from './keywords/module';
import { ParsedFunction } from './keywords/function';
import { ParsedConstant } from './keywords/constant';
import { ParsedDeclare } from './keywords/declare';
import { prepareCompletionItems } from './utils';
import {
  defaultFunctionInstructions,
  keywordInstructions,
  keywords,
  operatorInstructions,
  typeInstructions,
  valueInstructions,
} from './instructions';

export function activate(context: vscode.ExtensionContext): void {
  const provider = vscode.languages.registerCompletionItemProvider(
    { language: 'pseudolang' },
    {
      provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position
      ): vscode.CompletionItem[] {
        const currentLine = document.lineAt(position.line).text.trim();

        const completionItems: vscode.CompletionItem[] = [];

        let currentModuleFunction: ParsedModule | ParsedFunction | null = null;
        const globalVariables: { type: string; name: string }[] = [];
        let moduleFunctionVariables: { type: string; name: string }[] = [];

        const modules: ParsedModule[] = [];
        const functions: ParsedFunction[] = [];

        // Detecting variables, constants, modules and functions
        for (let i = 0; i <= position.line; i++) {
          const line = document.lineAt(i).text.trim();

          const parsedLine = parseLine(line);
          if (!parsedLine) continue;

          if (['module', 'function'].includes(parsedLine.instruction)) {
            currentModuleFunction = parsedLine as ParsedModule | ParsedFunction;
            if (parsedLine.instruction === 'module') modules.push(parsedLine);
            else functions.push(parsedLine as ParsedFunction);
          }

          if (['endmodule', 'endfunction'].includes(parsedLine.instruction)) {
            currentModuleFunction = null;
            moduleFunctionVariables = [];
          }
          if (['constant', 'declare'].includes(parsedLine.instruction)) {
            if (currentModuleFunction)
              moduleFunctionVariables.push(
                ...(parsedLine as ParsedConstant | ParsedDeclare).vars
              );
            else globalVariables.push(...(parsedLine as ParsedConstant).vars);
          }
        }

        // Keywords
        if (!currentLine || !keywords.find((i) => currentLine.startsWith(i)))
          completionItems.push(...prepareCompletionItems(keywordInstructions));

        // Values
        if (
          [
            'Constant',
            'Declare',
            'Set',
            'Call',
            'If',
            'Else If',
            'While',
            'Case',
          ].find((keyword) => currentLine.startsWith(keyword))
        )
          completionItems.push(...prepareCompletionItems(valueInstructions));

        // Variables and constants
        if (
          [
            'Constant',
            'Declare',
            'Set',
            'Input',
            'Display',
            'Call',
            'If',
            'Else If',
            'Select',
            'Case',
            'While',
            'For',
            'Open',
            'Write',
            'Close',
            'Read',
          ].find((keyword) => currentLine.startsWith(keyword))
        ) {
          completionItems.push(
            ...prepareCompletionItems(
              globalVariables.map((var_) => ({
                kind: vscode.CompletionItemKind.Variable,
                label: var_.name,
                detail: '',
              }))
            ),
            ...prepareCompletionItems(
              moduleFunctionVariables.map((var_) => ({
                kind: vscode.CompletionItemKind.Variable,
                label: var_.name,
                detail: '',
              }))
            )
          );

          if (currentModuleFunction) {
            completionItems.push(
              ...prepareCompletionItems(
                currentModuleFunction.params.map((var_) => ({
                  kind: vscode.CompletionItemKind.Variable,
                  label: var_.name,
                  detail: '',
                }))
              )
            );
          }
        }

        // Functions
        if (
          [
            'Constant',
            'Declare',
            'Set',
            'Display',
            'If',
            'Else If',
            'Select',
            'Case',
            'While',
            'For',
            'Open',
            'Read',
            'Write',
            'Close',
          ].find((keyword) => currentLine.startsWith(keyword))
        ) {
          completionItems.push(
            ...prepareCompletionItems(defaultFunctionInstructions),
            ...prepareCompletionItems(
              functions.map((function_) => ({
                kind: vscode.CompletionItemKind.Function,
                label: function_.name,
                detail: '',
                insertText: new vscode.SnippetString(
                  `${function_.name}(\${1:parametry})`
                ),
              }))
            )
          );
        }

        // Add functions
        completionItems.push(
          ...functions.map((function_) => ({
            kind: vscode.CompletionItemKind.Function,
            label: function_.name,
          }))
        );

        // Return
        if (currentModuleFunction?.instruction === 'function')
          completionItems.push(
            ...prepareCompletionItems([
              {
                kind: vscode.CompletionItemKind.Keyword,
                label: 'Return',
                detail: 'Zwraca coś i kończy działanie funkcji.',
                insertText: new vscode.SnippetString('Return'),
              },
            ])
          );

        // Modules
        if (currentLine.startsWith('Call')) {
          completionItems.push(
            ...prepareCompletionItems(
              modules.map((module) => ({
                kind: vscode.CompletionItemKind.Module,
                label: module.name,
                detail: '',
                insertText: new vscode.SnippetString(
                  `${module.name}(\${1:parametry})`
                ),
              }))
            )
          );
        }

        // Types
        if (
          ['Constant', 'Declare', 'Module', 'Function'].find((keyword) =>
            currentLine.startsWith(keyword)
          )
        ) {
          completionItems.push(...prepareCompletionItems(typeInstructions));
        }

        // Operators
        if (
          [
            'Constant',
            'Declare',
            'Set',
            'Display',
            'If',
            'Else If',
            'While',
          ].find((keyword) => currentLine.startsWith(keyword))
        )
          completionItems.push(...prepareCompletionItems(operatorInstructions));

        return completionItems;
      },
    }
  );

  context.subscriptions.push(provider);
}

export function deactivate(): void {}
