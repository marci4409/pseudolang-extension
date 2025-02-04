import { parseConstantLine, ParsedConstant } from './constant';
import { ParsedDeclare, parseDeclareLine } from './declare';
import { ParsedFunction, parseFunctionLine } from './function';
import { ParsedModule, parseModuleLine } from './module';

export type ParsedInstruction =
  | ParsedModule
  | ParsedFunction
  | ParsedConstant
  | ParsedDeclare
  | { instruction: 'endmodule' }
  | { instruction: 'endfunction' }
  | undefined;

export function parseLine(line: string): ParsedInstruction {
  if (line.startsWith('Module')) return parseModuleLine(line);
  if (line.startsWith('Function')) return parseFunctionLine(line);
  if (line.startsWith('End Module')) return { instruction: 'endmodule' };
  if (line.startsWith('End Function')) return { instruction: 'endfunction' };
  if (line.startsWith('Constant')) return parseConstantLine(line);
  if (line.startsWith('Declare')) return parseDeclareLine(line);
}
