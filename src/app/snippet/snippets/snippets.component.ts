import { Component, OnInit, inject } from '@angular/core';
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
export class SnippetsComponent implements OnInit {
  snippetService = inject(SnippetService);

  ngOnInit(): void {
    this.snippetService.initState();
  }

  get snippets$() {
    return this.snippetService.snippets$;
  }
}
