import * as ts from 'typescript';
import { Injectable } from '@angular/core';
import { Snippet, SnippetFunction, SnippetFunctionParameter, SnippetFunctionParameterValues, SnippetFunctionValues } from './types';

@Injectable({
  providedIn: 'root'
})
export class SnippetCompilerService {

  getFunctions(code: string): {
    functions: SnippetFunction[],
    functionValues: SnippetFunctionValues
  } {
    const source = this.parse(code);

    const functions: SnippetFunction[] = [];

    ts.forEachChild(source, node => {
      if (ts.isFunctionDeclaration(node) && node.name && node.name.text) {        
        const funcName = node.name.text;
        const funcParameters: SnippetFunctionParameter[] = [];
        
        for (const param of node.parameters) {
          if (ts.isIdentifier(param.name)) {
            const paramName = param.name.text;
            const paramType = param.type?.getText(source);
            
            funcParameters.push({
              id: this.hashCodeNumber(`${funcName}.${paramName}`),
              name: paramName,
              type: paramType && paramType.length > 0 ? paramType : 'unknown'
            });
          }
        }

        functions.push({
          id: this.hashCodeNumber(funcName),
          name: funcName,
          parameters: funcParameters
        });
      }
    });

    return {
      functions,
      // TODO: keep param values alive as long as the param exists
      functionValues: this.generateEmptyFunctionValues(functions)
    };
  }

  private generateEmptyFunctionValues(functions: SnippetFunction[]): SnippetFunctionValues {
    return functions.reduce((acc, func) => {
      return {
        ...acc,
        [func.id]: func.parameters.reduce((acc, param) => {
          return {
            ...acc,
            [param.id]: ''
          }
        }, {})
      }
    }, {});
  }

  private parse(code: string): ts.SourceFile {
    const fileName = this.getFileName(code);

    return ts.createSourceFile(fileName, code, ts.ScriptTarget.ES2015);
  }

  private getFileName(code: string): string {
    return this.hashCode(code) + '.ts';
  }

  private hashCode(str: string): string {
    return this.hashCodeNumber(str).toString(36);
  }

  private hashCodeNumber(str: string): number {
    let hash = 0;

    if (str.length === 0) {
      return 0;
    }

    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }

    return Math.abs(hash);
  }

  executeFunction(snippet: Snippet, functionId: number): string {
    // compile TS code to JS
    const result = ts.transpileModule(snippet.code, { compilerOptions: { module: ts.ModuleKind.CommonJS } });
    const jsCode = result.outputText;

    // execute JS code
    const resultFn = new Function(`return ${jsCode}`)();
    return resultFn(...Object.values(snippet.functionValues[functionId]));
  }
}
