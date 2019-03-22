import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsViewsComponent } from './students-views.component';

describe('StudentsViewsComponent', () => {
  let component: StudentsViewsComponent;
  let fixture: ComponentFixture<StudentsViewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsViewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
