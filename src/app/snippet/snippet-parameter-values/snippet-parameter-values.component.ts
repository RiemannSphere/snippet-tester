import { Component, Input, inject } from '@angular/core';
import { SnippetFunctionParameter, SnippetFunctionParameterValues } from '../types';
import { SnippetService } from '../snippet.service';

type Param = SnippetFunctionParameter & {value: string};

@Component({
  selector: 'app-snippet-parameter-values',
  standalone: true,
  imports: [],
  templateUrl: './snippet-parameter-values.component.html',
  styleUrl: './snippet-parameter-values.component.css'
})
export class SnippetParameterValuesComponent {
  @Input({required: true}) snippetId!: number;
  @Input({required: true}) functionId!: number;
  @Input({required: true}) parameters!: SnippetFunctionParameter[];
  @Input({required: true}) parameterValues!: SnippetFunctionParameterValues;

  snippetService = inject(SnippetService);

  get params(): Param[] {
    console.log('this.parameterValues: ', this.parameterValues);
    return this.parameters.map(param => ({
      ...param,
      value: this.parameterValues[param.id]
    }));
  }

  onInput(event: Event, param: Param): void {
    const paramValue = (event.target as HTMLInputElement).value;
    
    // TODO: how to validate param value type?

    this.snippetService.updateState(this.snippetId, {
      functionValues: {
        [this.functionId]: {
          ...this.parameterValues,
          [param.id]: paramValue
        }
      }
    })
  }
}
