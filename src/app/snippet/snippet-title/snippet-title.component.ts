import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-snippet-title',
  standalone: true,
  imports: [],
  templateUrl: './snippet-title.component.html',
  styleUrl: './snippet-title.component.css'
})
export class SnippetTitleComponent {
  @Input({required: true}) title!: string;
}
