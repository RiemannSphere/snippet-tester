import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SnippetService } from '../snippet.service';
import { SPACES_IN_TAB } from '../const';
import { SnippetCompilerService } from '../snippet-compiler.service';

@Component({
  selector: 'app-snippet-code',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './snippet-code.component.html',
  styleUrl: './snippet-code.component.css',
})
export class SnippetCodeComponent {
  @Input({ required: true }) snippetId!: number;
  @Input({ required: true }) code!: string;

  snippetService = inject(SnippetService);
  snippetCompilerService = inject(SnippetCompilerService);

  onInputChange(event: Event): void {
    const code = (event.target as HTMLInputElement).value;
    const { functions, functionValues } = this.snippetCompilerService.getFunctions(code);

    this.snippetService.updateState(this.snippetId, {
      code,
      functions,
      functionValues
    });
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Tab') {
      event.preventDefault();

      const textarea = event.target as HTMLTextAreaElement;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const value = textarea.value;

      // Insert an indent at the cursor position
      textarea.value =
        value.substring(0, start) +
        ' '.repeat(SPACES_IN_TAB) +
        value.substring(end);
      // Move cursor to after the inserted indent
      textarea.selectionStart = textarea.selectionEnd = start + SPACES_IN_TAB;

      this.onInputChange(event);
    }
  }
}
