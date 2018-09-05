import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSubjectsComponent } from './search-subjects.component';

describe('SearchSubjectsComponent', () => {
  let component: SearchSubjectsComponent;
  let fixture: ComponentFixture<SearchSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
