import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetDescriptionComponent } from './snippet-description.component';

describe('SnippetDescriptionComponent', () => {
  let component: SnippetDescriptionComponent;
  let fixture: ComponentFixture<SnippetDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnippetDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnippetDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
