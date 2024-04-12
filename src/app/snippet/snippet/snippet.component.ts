import { Component, Input } from '@angular/core';
import { SnippetTitleComponent } from '../snippet-title/snippet-title.component';
import { SnippetDescriptionComponent } from '../snippet-description/snippet-description.component';
import { SnippetCodeComponent } from '../snippet-code/snippet-code.component';
import { Snippet } from '../types';
import { SnippetParameterValuesComponent } from '../snippet-parameter-values/snippet-parameter-values.component';
import { SnippetExecutionComponent } from '../snippet-execution/snippet-execution.component';
import { SnippetFunctionComponent } from '../snippet-function/snippet-function.component';

@Component({
  selector: 'app-snippet',
  standalone: true,
  imports: [
    SnippetTitleComponent, 
    SnippetDescriptionComponent, 
    SnippetCodeComponent, 
    SnippetFunctionComponent,
    SnippetParameterValuesComponent,
    SnippetExecutionComponent
  ],
  templateUrl: './snippet.component.html',
  styleUrl: './snippet.component.css'
})
export class SnippetComponent {
  @Input({required: true}) snippet!: Snippet;
}
