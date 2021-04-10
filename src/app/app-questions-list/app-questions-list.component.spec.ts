import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppQuestionsComponent } from './app-questions-list.component';

describe('AppQuestionsComponent', () => {
  let component: AppQuestionsComponent;
  let fixture: ComponentFixture<AppQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
