import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetParameterValuesComponent } from './snippet-parameter-values.component';

describe('SnippetParameterValuesComponent', () => {
  let component: SnippetParameterValuesComponent;
  let fixture: ComponentFixture<SnippetParameterValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnippetParameterValuesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnippetParameterValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
