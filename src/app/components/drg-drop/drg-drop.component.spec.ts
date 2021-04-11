import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrgDropComponent } from './drg-drop.component';

describe('DrgDropComponent', () => {
  let component: DrgDropComponent;
  let fixture: ComponentFixture<DrgDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrgDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrgDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
