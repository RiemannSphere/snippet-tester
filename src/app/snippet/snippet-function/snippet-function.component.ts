import { Component, Input, inject } from '@angular/core';
import { Snippet, SnippetFunction } from '../types';
import { SnippetCompilerService } from '../snippet-compiler.service';
import { SnippetService } from '../snippet.service';

@Component({
  selector: 'app-snippet-function',
  standalone: true,
  imports: [],
  templateUrl: './snippet-function.component.html',
  styleUrl: './snippet-function.component.css',
})
export class SnippetFunctionComponent {
  @Input({ required: true }) snippet!: Snippet;
  @Input({ required: true }) function!: SnippetFunction;

  snippetCompilerService = inject(SnippetCompilerService);
  snippetService = inject(SnippetService);

  execute(): void {
    const result = this.snippetCompilerService.executeFunction(
      this.snippet,
      this.function.id
    );
    this.snippetService.updateState(this.snippet.id, {
      executions: { ...this.snippet.executions, [this.function.id]: result },
    });
  }
}
