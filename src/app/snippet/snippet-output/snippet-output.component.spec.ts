import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetOutputComponent } from './snippet-output.component';

describe('SnippetOutputComponent', () => {
  let component: SnippetOutputComponent;
  let fixture: ComponentFixture<SnippetOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnippetOutputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnippetOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
