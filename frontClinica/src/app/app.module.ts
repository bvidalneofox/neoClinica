import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthMasterComponent } from './auth/auth-master/auth-master.component';
import { PublicMasterComponent } from './public/public-master/public-master.component';
import { LoginComponent } from './public/login/login.component';
import { InicioComponent } from './auth/inicio/inicio.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './servicios/auth-interceptor.service';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { NavbarComponent } from './auth/layouts/navbar/navbar.component';
import { ResetPasswordComponent } from './public/reset-password/reset-password.component';
import { NuevaPasswordComponent } from './public/nueva-password/nueva-password.component';
import { PerfilPacienteComponent } from './auth/perfil-paciente/perfil-paciente.component';
import { AtencionesPacienteComponent } from './auth/pacientes/atenciones-paciente/atenciones-paciente.component';
import { HospitalizacionesPacienteComponent } from './auth/pacientes/hospitalizaciones-paciente/hospitalizaciones-paciente.component';
import { MedicionesPacienteComponent } from './auth/pacientes/mediciones-paciente/mediciones-paciente.component';
import { ExamenesPacienteComponent } from './auth/pacientes/examenes-paciente/examenes-paciente.component';
import { RecetasPacienteComponent } from './auth/pacientes/recetas-paciente/recetas-paciente.component';
import { RegistrarPacienteComponent } from './auth/pacientes/registrar-paciente/registrar-paciente.component';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { ListaPacientesComponent } from './auth/pacientes/lista-pacientes/lista-pacientes.component';
import { ListaMedicosComponent } from './auth/medicos/lista-medicos/lista-medicos.component';
import { RegistrarMedicoComponent } from './auth/medicos/registrar-medico/registrar-medico.component';
import { NuevaAtencionComponent } from './auth/pacientes/nueva-atencion/nueva-atencion.component';
import { CarpetaPacienteComponent } from './auth/pacientes/carpeta-paciente/carpeta-paciente.component';
import { FormularioAtencionComponent } from './auth/pacientes/formulario-atencion/formulario-atencion.component';
import { FormularioHospitalizacionComponent } from './auth/pacientes/formulario-hospitalizacion/formulario-hospitalizacion.component';
import { NuevaRecetaComponent } from './auth/pacientes/nueva-receta/nueva-receta.component';
import { VerRecetaComponent } from './auth/pacientes/ver-receta/ver-receta.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthMasterComponent,
    PublicMasterComponent,
    LoginComponent,
    InicioComponent,
    NavbarComponent,
    ResetPasswordComponent,
    NuevaPasswordComponent,
    PerfilPacienteComponent,
    AtencionesPacienteComponent,
    HospitalizacionesPacienteComponent,
    MedicionesPacienteComponent,
    ExamenesPacienteComponent,
    RecetasPacienteComponent,
    RegistrarPacienteComponent,
    DashboardComponent,
    ListaPacientesComponent,
    ListaMedicosComponent,
    RegistrarMedicoComponent,
    NuevaAtencionComponent,
    CarpetaPacienteComponent,
    FormularioAtencionComponent,
    FormularioHospitalizacionComponent,
    NuevaRecetaComponent,
    VerRecetaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
