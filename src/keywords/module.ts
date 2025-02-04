export interface ParsedModule {
  instruction: 'module';
  name: string;
  params: { name: string; type: string }[];
}

export function parseModuleLine(line: string): ParsedModule | undefined {
  const lineMatch = /^Module ([a-zA-Z0-9_]+)\((.*?)\)/.exec(line);
  if (!lineMatch) return;

  const params = lineMatch[2]
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

  return { instruction: 'module', name: lineMatch[1], params };
}
