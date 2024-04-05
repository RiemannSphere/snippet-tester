import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-snippet-output',
  standalone: true,
  imports: [],
  templateUrl: './snippet-output.component.html',
  styleUrl: './snippet-output.component.css'
})
export class SnippetOutputComponent {
  @Input({required: true}) output: unknown | null;
}
