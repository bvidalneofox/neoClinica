import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalizacionesPacienteComponent } from './hospitalizaciones-paciente.component';

describe('HospitalizacionesPacienteComponent', () => {
  let component: HospitalizacionesPacienteComponent;
  let fixture: ComponentFixture<HospitalizacionesPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalizacionesPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalizacionesPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
