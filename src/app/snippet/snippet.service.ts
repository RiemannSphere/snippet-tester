import { Injectable } from '@angular/core';
import { BehaviorSubject, of, tap } from 'rxjs';
import { Snippet } from './types';
import { snippets } from './snippets.mock';

@Injectable({
  providedIn: 'root'
})
export class SnippetService {

  snippetsSub = new BehaviorSubject<Snippet[]>([]);
  snippets$ = this.snippetsSub.asObservable().pipe(
    tap(snippets => console.log('state: ', snippets))
  );

  initState(): void {
    this.snippetsSub.next(snippets);
  }

  updateState(snippetId: number, partialSnippet: Partial<Snippet>): void {
    const currentState = this.snippetsSub.value;
    const newState = currentState.map(snippet => {
      if (snippet.id === snippetId) {
        return {...snippet, ...partialSnippet};
      }
      return snippet;
    })
    this.snippetsSub.next(newState);
  }
}
