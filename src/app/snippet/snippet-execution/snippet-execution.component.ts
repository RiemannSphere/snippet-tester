import { Component, Input } from '@angular/core';
import { SnippetFunctionExecutions } from '../types';

@Component({
  selector: 'app-snippet-execution',
  standalone: true,
  imports: [],
  templateUrl: './snippet-execution.component.html',
  styleUrl: './snippet-execution.component.css'
})
export class SnippetExecutionComponent {
  @Input({required: true}) execution!: string;
}
