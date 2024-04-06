import { TestBed } from '@angular/core/testing';

import { SnippetCompilerService } from './snippet-compiler.service';

describe('SnippetCompilerService', () => {
  let service: SnippetCompilerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnippetCompilerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
