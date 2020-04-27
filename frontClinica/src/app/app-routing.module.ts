import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicMasterComponent } from './public/public-master/public-master.component';
import { AuthMasterComponent } from './auth/auth-master/auth-master.component';
import { GuardianService } from './servicios/guardian.service';
import { LoginComponent } from './public/login/login.component';
import { InicioComponent } from './auth/inicio/inicio.component';
import { ResetPasswordComponent } from './public/reset-password/reset-password.component';
import { NuevaPasswordComponent } from './public/nueva-password/nueva-password.component';
import { PerfilPacienteComponent } from './auth/perfil-paciente/perfil-paciente.component';
import { RegistrarPacienteComponent } from './auth/pacientes/registrar-paciente/registrar-paciente.component';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { ListaPacientesComponent } from './auth/pacientes/lista-pacientes/lista-pacientes.component';
import { ListaMedicosComponent } from './auth/medicos/lista-medicos/lista-medicos.component';
import { RegistrarMedicoComponent } from './auth/medicos/registrar-medico/registrar-medico.component';
import { NuevaAtencionComponent } from './auth/pacientes/nueva-atencion/nueva-atencion.component';
import { CarpetaPacienteComponent } from './auth/pacientes/carpeta-paciente/carpeta-paciente.component';
import { FormularioAtencionComponent } from './auth/pacientes/formulario-atencion/formulario-atencion.component';
import { FormularioHospitalizacionComponent } from './auth/pacientes/formulario-hospitalizacion/formulario-hospitalizacion.component';


const routes: Routes = [
  //RUTAS PUBLICSA CON HIJOS
  {
    path: '', component: PublicMasterComponent, children:
      [
        { path: '', component: LoginComponent },
        { path: 'olvidePassword', component: ResetPasswordComponent },
        { path: 'cambiarPasswordOlvidada', component: NuevaPasswordComponent }
      ]
  },

  //RUTAS PROTEGIDAS DEL SISTEMA
  {
    path: 'Inicio', component: AuthMasterComponent, canActivate: [GuardianService], children:
      [
        { path: '', component: InicioComponent },
        { path: 'Perfil', component: PerfilPacienteComponent, children:
          [
            { path: '', component: CarpetaPacienteComponent },
            { path: 'NuevaAtencion', component: NuevaAtencionComponent },
            { path: 'FormularioAtencion', component: FormularioAtencionComponent },
            { path: 'FormularioHospitalizacion', component: FormularioHospitalizacionComponent }
          ] 
        },
        { path: 'NuevoPaciente', component: RegistrarPacienteComponent },
        { path: 'Dashboard', component: DashboardComponent },
        { path: 'ListaPacientes', component: ListaPacientesComponent },
        { path: 'ListaMedicos', component: ListaMedicosComponent },
        { path: 'NuevoMedico', component:RegistrarMedicoComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
