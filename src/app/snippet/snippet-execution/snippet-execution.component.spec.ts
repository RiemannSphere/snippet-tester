import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetExecutionComponent } from './snippet-execution.component';

describe('SnippetExecutionComponent', () => {
  let component: SnippetExecutionComponent;
  let fixture: ComponentFixture<SnippetExecutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnippetExecutionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnippetExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
