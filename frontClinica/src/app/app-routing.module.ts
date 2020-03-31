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
        { path: 'Perfil', component: PerfilPacienteComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
