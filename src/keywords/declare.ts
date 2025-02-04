interface DeclaredVariable {
  name: string;
  type: string;
}

export interface ParsedDeclare {
  vars: DeclaredVariable[];
  instruction: 'declare';
}

export function parseDeclareLine(line: string): ParsedDeclare {
  const raw = line
    .replace(/^Declare /, '')
    .split(',')
    .map((raw) => raw.trim().split(' '));
  const variables: DeclaredVariable[] = [];
  raw.forEach((rawVariable) => {
    if (rawVariable.length === 1 || rawVariable[1].trim() === '=') {
      if (variables.length === 0) return;
      variables.push({
        name: rawVariable[0],
        type: variables[variables.length - 1].type,
      });
    } else {
      variables.push({ name: rawVariable[1], type: rawVariable[0] });
    }
  });
  return { vars: variables, instruction: 'declare' };
}
