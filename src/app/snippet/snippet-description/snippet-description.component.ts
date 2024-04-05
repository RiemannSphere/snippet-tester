import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-snippet-description',
  standalone: true,
  imports: [],
  templateUrl: './snippet-description.component.html',
  styleUrl: './snippet-description.component.css'
})
export class SnippetDescriptionComponent {
  @Input({required: true}) description!: string;
}
