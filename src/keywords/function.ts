export interface ParsedFunction {
  instruction: 'function';
  name: string;
  type: string;
  params: { name: string; type: string }[];
}

export function parseFunctionLine(line: string): ParsedFunction | undefined {
  const lineMatch =
    /^Function (String|Real|Integer|Boolean|InputFile|OutputFile) ([a-zA-Z0-9_]+)\((.*?)\)/.exec(
      line
    );
  if (!lineMatch) return;

  const params = lineMatch[3]
    .split(',')
    .map((raw) => {
      const paramMatch =
        /(String|Real|Integer|Boolean|InputFile|OutputFile)( Ref)? ([a-zA-Z0-9_]+)/.exec(
          raw.trim()
        );
      if (!paramMatch) return;
      return { type: paramMatch[1], name: paramMatch[3] };
    })
    .filter((param) => !!param);

  return {
    instruction: 'function',
    type: lineMatch[1],
    name: lineMatch[2],
    params,
  };
}
