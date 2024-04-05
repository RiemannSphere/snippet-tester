import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-snippet-code',
  standalone: true,
  imports: [],
  templateUrl: './snippet-code.component.html',
  styleUrl: './snippet-code.component.css'
})
export class SnippetCodeComponent {
  @Input({required: true}) code!: string;
}
