import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioHospitalizacionComponent } from './formulario-hospitalizacion.component';

describe('FormularioHospitalizacionComponent', () => {
  let component: FormularioHospitalizacionComponent;
  let fixture: ComponentFixture<FormularioHospitalizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioHospitalizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioHospitalizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
