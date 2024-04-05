import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetTitleComponent } from './snippet-title.component';

describe('SnippetTitleComponent', () => {
  let component: SnippetTitleComponent;
  let fixture: ComponentFixture<SnippetTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnippetTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnippetTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
