import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineControlComponent } from './machine-control.component';

describe('MachineControlComponent', () => {
  let component: MachineControlComponent;
  let fixture: ComponentFixture<MachineControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
