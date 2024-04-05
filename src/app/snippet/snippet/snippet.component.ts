import { Component, Input } from '@angular/core';
import { SnippetTitleComponent } from '../snippet-title/snippet-title.component';
import { SnippetDescriptionComponent } from '../snippet-description/snippet-description.component';
import { SnippetCodeComponent } from '../snippet-code/snippet-code.component';
import { SnippetInputsComponent } from '../snippet-inputs/snippet-inputs.component';
import { SnippetOutputComponent } from '../snippet-output/snippet-output.component';
import { Snippet } from '../types';

@Component({
  selector: 'app-snippet',
  standalone: true,
  imports: [
    SnippetTitleComponent, 
    SnippetDescriptionComponent, 
    SnippetCodeComponent, 
    SnippetInputsComponent, 
    SnippetOutputComponent
  ],
  templateUrl: './snippet.component.html',
  styleUrl: './snippet.component.css'
})
export class SnippetComponent {
  @Input({required: true}) snippet!: Snippet;
}
