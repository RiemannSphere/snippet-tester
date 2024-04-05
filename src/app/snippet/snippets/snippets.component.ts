import { Component, inject } from '@angular/core';
import { SnippetComponent } from '../snippet/snippet.component';
import { SnippetService } from '../snippet.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-snippets',
  standalone: true,
  imports: [SnippetComponent, CommonModule],
  templateUrl: './snippets.component.html',
  styleUrl: './snippets.component.css',
})
export class SnippetsComponent {
  snippetService = inject(SnippetService);

  get snippets$() {
    return this.snippetService.snippets$;
  }
}
