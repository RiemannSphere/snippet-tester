import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Snippet } from './types';
import { snippets } from './snippets.mock';

@Injectable({
  providedIn: 'root'
})
export class SnippetService {
  snippets$ = of<Snippet[]>(snippets);
}
