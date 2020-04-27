import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenesPacienteComponent } from './examenes-paciente.component';

describe('ExamenesPacienteComponent', () => {
  let component: ExamenesPacienteComponent;
  let fixture: ComponentFixture<ExamenesPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamenesPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenesPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
