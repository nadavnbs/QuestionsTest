import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllQuestionnairesComponent } from './all-questionnaires.component';

describe('AllQuestionnairesComponent', () => {
  let component: AllQuestionnairesComponent;
  let fixture: ComponentFixture<AllQuestionnairesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllQuestionnairesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllQuestionnairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
