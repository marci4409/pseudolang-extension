interface ConstantVariable {
  name: string;
  type: string;
}

export interface ParsedConstant {
  vars: ConstantVariable[];
  instruction: 'constant';
}

export function parseConstantLine(line: string): ParsedConstant {
  const raw = line
    .replace(/^Constant /, '')
    .split(',')
    .map((raw) => raw.trim().split(' '));
  const variables: ConstantVariable[] = [];
  raw.forEach((rawVariable) => {
    if (rawVariable.length === 1 || rawVariable[1] === '=') {
      if (variables.length === 0) return;
      variables.push({
        name: rawVariable[0],
        type: variables[variables.length - 1].type,
      });
    } else {
      variables.push({ name: rawVariable[1], type: rawVariable[0] });
    }
  });
  return { vars: variables, instruction: 'constant' };
}
