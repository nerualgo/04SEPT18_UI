import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseToolbarComponent } from './case-toolbar.component';

describe('CaseToolbarComponent', () => {
  let component: CaseToolbarComponent;
  let fixture: ComponentFixture<CaseToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
