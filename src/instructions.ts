import * as vscode from 'vscode';

export const keywords = [
  'Module',
  'Function',
  'End Module',
  'End Function',
  'Constant',
  'Declare',
  'Set',
  'Input',
  'Display',
  'Call',
  'If',
  'End If',
  'Else',
  'End If',
  'Select',
  'Default',
  'Case',
  'Do',
  'While',
  'End While',
  'Break',
  'For',
  'End For',
  'Open',
  'Write',
  'Read',
  'Close',
];

export const keywordInstructions = [
  {
    kind: vscode.CompletionItemKind.Keyword,
    label: 'Module',
    detail: 'Definiuje początek modułu.',
    insertText: new vscode.SnippetString(
      'Module ${1:nazwa}(${2:parametry})\n\t$0\nEnd Module\n'
    ),
  },
  {
    kind: vscode.CompletionItemKind.Keyword,
    label: 'Function',
    detail: 'Definiuje początek funkcji.',
    insertText: new vscode.SnippetString(
      'Function ${1:zwracanyTyp} ${2:nazwa}(${3:parametry})\n\t$0\nEnd Function\n'
    ),
  },
  {
    kind: vscode.CompletionItemKind.Keyword,
    label: 'Constant',
    detail: 'Definiuje stałą.',
    insertText: new vscode.SnippetString(
      'Constant ${1:typ} ${2:nazwa} = ${3:wartosc}'
    ),
  },
  {
    kind: vscode.CompletionItemKind.Keyword,
    label: 'Declare',
    detail: 'Definiuje zmienną.',
    insertText: new vscode.SnippetString('Declare ${1:typ} ${2:nazwa}'),
  },
  {
    kind: vscode.CompletionItemKind.Keyword,
    label: 'Set',
    detail: 'Ustawia wartość zdefiniowanej zmiennej.',
    insertText: new vscode.SnippetString('Set ${1:nazwa} = ${2:wartosc}'),
  },
  {
    kind: vscode.CompletionItemKind.Keyword,
    label: 'Input',
    detail: 'Wczytuje wpisany przez użytkownika tekst do zmiennej.',
    insertText: new vscode.SnippetString('Input ${1:nazwaZmiennej}'),
  },
  {
    kind: vscode.CompletionItemKind.Keyword,
    label: 'Display',
    detail: 'Wypisuje tekst/zmienną na ekranie.',
    insertText: new vscode.SnippetString('Display ${1:cos}'),
  },
  {
    kind: vscode.CompletionItemKind.Keyword,
    label: 'Call',
    detail: 'Wywołuje moduł.',
    insertText: new vscode.SnippetString('Call ${1:nazwaModulu}'),
  },
  {
    kind: vscode.CompletionItemKind.Keyword,
    label: 'If',
    detail: 'Instrukcja warunkowa.',
    insertText: new vscode.SnippetString(
      'If ${1:warunek} Then\n\t${2:instrukcje}\nEnd If'
    ),
  },
  {
    kind: vscode.CompletionItemKind.Keyword,
    label: 'Else',
    detail: 'W przeciwnym wypadku.',
    insertText: new vscode.SnippetString('Else\n\t${1:instrukcje}'),
  },
  {
    kind: vscode.CompletionItemKind.Keyword,
    label: 'Else If',
    detail: 'W przeciwnym wypadku jeżeli.',
    insertText: new vscode.SnippetString(
      'Else If ${1:warunek} Then\n\t${2:instrukcje}'
    ),
  },
  {
    kind: vscode.CompletionItemKind.Keyword,
    label: 'If:Else',
    detail: 'Instrukcja warunkowa z else.',
    insertText: new vscode.SnippetString(
      'If ${1:warunek} Then\n\t${2:instrukcje}\nElse\n\t${3:instrukcje}\nEnd If'
    ),
  },
  {
    kind: vscode.CompletionItemKind.Keyword,
    label: 'Select',
    detail: 'Instrukcja select.',
    insertText: new vscode.SnippetString(
      'Select ${1:nazwaZmiennej}\n\tCase ${2:wartosc}:\n\t\t${3:instrukcje}\n\tCase ${4:wartosc}:\n\t\t${5:instrukcje}\nEnd Select'
    ),
  },
  {
    kind: vscode.CompletionItemKind.Keyword,
    label: 'Case',
    detail: 'Select - Case.',
    insertText: new vscode.SnippetString(
      'Case ${1:wartosc}:\n\t${2:instrukcje}'
    ),
  },
  {
    kind: vscode.CompletionItemKind.Keyword,
    label: 'Default',
    detail: 'Select - domyślna wartość.',
    insertText: new vscode.SnippetString('Default:\n\t${1:instrukcje}'),
  },
  {
    kind: vscode.CompletionItemKind.Keyword,
    label: 'While',
    detail: 'Pętla while (dopóki).',
    insertText: new vscode.SnippetString(
      'While ${1:warunek}:\n\t${2:instrukcje}\nEnd While'
    ),
  },
  {
    kind: vscode.CompletionItemKind.Keyword,
    label: 'Break',
    detail: 'Przerwij pętlę.',
    insertText: new vscode.SnippetString('Break\n'),
  },
  {
    kind: vscode.CompletionItemKind.Keyword,
    label: 'For',
    detail: 'Pętla for.',
    insertText: new vscode.SnippetString(
      'For ${1:zmienna} = ${2:poczatkowaWartosc} To ${3:maksymalnaWartosc}\n\t${4:instrukcje}\nEnd For'
    ),
  },
  {
    kind: vscode.CompletionItemKind.Keyword,
    label: 'For+Step',
    detail: 'Pętla for z niestandardową zmianą wartości zmiennej licznikowej.',
    insertText: new vscode.SnippetString(
      'For ${1:zmienna} = ${2:poczatkowaWartosc} To ${3:maksymalnaWartosc} Step ${4:roznica}\n\t${5:instrukcje}\nEnd For'
    ),
  },
  {
    kind: vscode.CompletionItemKind.Keyword,
    label: 'Do While',
    detail: 'Pętla do while.',
    insertText: new vscode.SnippetString(
      'Do\n\t${1:instrukcje}\nWhile ${2:warunek}\n'
    ),
  },
  {
    kind: vscode.CompletionItemKind.Keyword,
    label: 'Open',
    detail: 'Otwieranie pliku.',
    insertText: new vscode.SnippetString(
      'Open ${1:nazwaZmiennej} "${2:nazwaPliku}"'
    ),
  },
  {
    kind: vscode.CompletionItemKind.Keyword,
    label: 'Read',
    detail: 'Odczytywanie treści pliku.',
    insertText: new vscode.SnippetString(
      'Read ${1:zmiennaPlikowa} ${2:zmiennaDoZapisaniaTresci}'
    ),
  },
  {
    kind: vscode.CompletionItemKind.Keyword,
    label: 'Close',
    detail: 'Zamknięcie pliku.',
    insertText: new vscode.SnippetString('Close ${1:zmiennaPlikowa}'),
  },
  {
    kind: vscode.CompletionItemKind.Keyword,
    label: 'Write',
    detail: 'Zapisanie wartości zmiennej do pliku.',
    insertText: new vscode.SnippetString(
      'Write ${1:zmiennaPlikowa} ${2:zmiennaTresc}'
    ),
  },
];

export const typeInstructions = [
  {
    kind: vscode.CompletionItemKind.TypeParameter,
    label: 'Real',
    detail: 'Liczba rzeczywista (typ)',
  },
  {
    kind: vscode.CompletionItemKind.TypeParameter,
    label: 'String',
    detail: 'Ciąg znaków, czyli po prostu tekst (typ)',
  },
  {
    kind: vscode.CompletionItemKind.TypeParameter,
    label: 'Boolean',
    detail: 'Prawda/fałsz (typ)',
  },
  {
    kind: vscode.CompletionItemKind.TypeParameter,
    label: 'Integer',
    detail: 'Liczba całkowita (typ)',
  },
  {
    kind: vscode.CompletionItemKind.TypeParameter,
    label: 'InputFile',
    detail: 'Plik w trybie do odczytu (typ)',
  },
  {
    kind: vscode.CompletionItemKind.TypeParameter,
    label: 'OutputFile',
    detail: 'Plik w trybie do zapisu (typ)',
  },
  {
    kind: vscode.CompletionItemKind.TypeParameter,
    label: 'Ref',
    detail: 'Zmienna referencyjna',
  },
];

export const valueInstructions = [
  {
    kind: vscode.CompletionItemKind.Value,
    label: 'true',
    detail: 'Prawda',
  },
  {
    kind: vscode.CompletionItemKind.Value,
    label: 'false',
    detail: 'Fałsz',
  },
];

export const defaultFunctionInstructions = [
  {
    kind: vscode.CompletionItemKind.Function,
    label: 'random',
    detail: 'Losowa liczba (funkcja biblioteczna)',
    insertText: new vscode.SnippetString(
      'random(${1:minimalnaWartosc}, ${2:maksymalnaWartosc})'
    ),
  },
  {
    kind: vscode.CompletionItemKind.Function,
    label: 'toLower',
    detail: 'Zamień wszystkie litery na małe (funkcja biblioteczna)',
    insertText: new vscode.SnippetString('toLower(${1:tekst})'),
  },
  {
    kind: vscode.CompletionItemKind.Function,
    label: 'toUpper',
    detail: 'Zamień wszystkie litery na wielkie (funkcja biblioteczna)',
    insertText: new vscode.SnippetString('toUpper(${1:tekst})'),
  },
];

export const operatorInstructions = [
  {
    kind: vscode.CompletionItemKind.Operator,
    label: 'AND',
    detail: 'Oraz (operator)',
  },
  {
    kind: vscode.CompletionItemKind.Operator,
    label: 'OR',
    detail: 'Lub (operator)',
  },
  {
    kind: vscode.CompletionItemKind.Operator,
    label: 'NOT',
    detail: 'Nie (operator)',
  },
  {
    kind: vscode.CompletionItemKind.Operator,
    label: 'MOD',
    detail: 'Reszta z dzielenia, modulo (operator)',
  },
];
