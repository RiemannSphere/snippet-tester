import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-snippet-inputs',
  standalone: true,
  imports: [],
  templateUrl: './snippet-inputs.component.html',
  styleUrl: './snippet-inputs.component.css'
})
export class SnippetInputsComponent {
  @Input({required: true}) inputs!: unknown[];
}
