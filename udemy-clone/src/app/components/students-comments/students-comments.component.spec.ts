import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsCommentsComponent } from './students-comments.component';

describe('StudentsCommentsComponent', () => {
  let component: StudentsCommentsComponent;
  let fixture: ComponentFixture<StudentsCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
