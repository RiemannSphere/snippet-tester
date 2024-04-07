import { Component, Input } from '@angular/core';
import { SnippetFunction } from '../types';

@Component({
  selector: 'app-snippet-function',
  standalone: true,
  imports: [],
  templateUrl: './snippet-function.component.html',
  styleUrl: './snippet-function.component.css'
})
export class SnippetFunctionComponent {
  @Input({required: true}) function!: SnippetFunction;
}
