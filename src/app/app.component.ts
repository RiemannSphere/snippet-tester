import { Component } from '@angular/core';
import { SnippetsComponent } from './snippet/snippets/snippets.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SnippetsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
