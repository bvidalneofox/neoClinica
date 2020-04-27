import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpetaPacienteComponent } from './carpeta-paciente.component';

describe('CarpetaPacienteComponent', () => {
  let component: CarpetaPacienteComponent;
  let fixture: ComponentFixture<CarpetaPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarpetaPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpetaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
