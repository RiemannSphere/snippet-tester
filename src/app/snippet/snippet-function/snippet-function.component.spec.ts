import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetFunctionComponent } from './snippet-function.component';

describe('SnippetFunctionComponent', () => {
  let component: SnippetFunctionComponent;
  let fixture: ComponentFixture<SnippetFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnippetFunctionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnippetFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
