import * as ts from 'typescript';
import { SHA256 } from 'crypto-js';
import { Injectable } from '@angular/core';
import { SnippetFunction, SnippetFunctionParameter } from './types';

@Injectable({
  providedIn: 'root'
})
export class SnippetCompilerService {

  getFunctions(code: string): SnippetFunction[] {
    const source = this.parse(code);

    const functions: SnippetFunction[] = [];

    ts.forEachChild(source, node => {
      if (ts.isFunctionDeclaration(node) && node.name && node.name.text) {
        console.log('node: ', node); 
        
        const funcName = node.name.text;
        const funcParameters: SnippetFunctionParameter[] = [];
        
        for (const param of node.parameters) {
          if (ts.isIdentifier(param.name)) {
            const paramName = param.name.text;
            const paramType = param.type?.getText(source);
            
            funcParameters.push({
              name: paramName,
              type: paramType && paramType.length > 0 ? paramType : 'unknown'
            });
          }
        }

        functions.push({
          name: funcName,
          parameters: funcParameters
        })
      }
    });

    console.log('functions: ', functions.map(fn => `${fn.name}(${ fn.parameters.map(param => `${param.name}: ${param.type}`).join(', ') })`));

    return functions;
  }

  private parse(code: string): ts.SourceFile {
    const fileName = this.getFileName(code);

    return ts.createSourceFile(fileName, code, ts.ScriptTarget.ES2015);
  }

  private getFileName(code: string): string {
    return this.hashCode(code) + '.ts';
  }

  private hashCode(str: string): string {
    let hash = 0;

    if (str.length === 0) {
      return '';
    }

    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }

    return Math.abs(hash).toString(36);
  }
}
