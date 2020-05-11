import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataoutComponent } from './dataout.component';

describe('DataoutComponent', () => {
  let component: DataoutComponent;
  let fixture: ComponentFixture<DataoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
