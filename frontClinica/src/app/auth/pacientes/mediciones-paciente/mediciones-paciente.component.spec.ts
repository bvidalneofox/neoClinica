import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicionesPacienteComponent } from './mediciones-paciente.component';

describe('MedicionesPacienteComponent', () => {
  let component: MedicionesPacienteComponent;
  let fixture: ComponentFixture<MedicionesPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicionesPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicionesPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
