import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {debounceTime, distinctUntilChanged, map, filter} from 'rxjs/operators';

type State = {id: number, name: string, rut: string};
const states = [
  {id: 0, name: 'Bryan Andrés Vidal Díaz', rut: '185227839'},
  {id: 1, name: 'Bryan Andrés montecino Jara', rut: '185227839'},
  {id: 2, name: 'David Antonio Luna Cuevas', rut: '185227839'},
  {id: 3, name: 'Alejandro Esteban Godoy Troncozo', rut: '185227839'}
];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() abrirSidebarParent = new EventEmitter<string>();
  //VARIABLE PARA EL CSS DEL BOTON SIDEBAR
  estilo = 'dot';
  //Variable con nombre del usuario rescatado desde LS
  nombreUser = '';

  // VARIABLE PARA RECIBIR A LOS USUARIOS

  constructor(private _loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.nombreUser = localStorage.getItem('nameUser');
  }

  abrirSidebar(){
    this.abrirSidebarParent.emit('abrirSidebarString');
    if(this.estilo == 'dot'){
      this.estilo = 'dot-sidebar';
    }else{
      this.estilo = 'dot';
    }
  }

  logout(){
    this._loginService.logout().subscribe(response =>{
      if(response.status == 'success'){
        localStorage.removeItem('token');
        this.router.navigate(['']);
      }else{
        alert(response.msg);
      }
    }, error=>{
      console.log(error);
    });
  }

  // AUTOCOMPLETE DEL INPUT
  public model: State;

  formatter = (state: State) => state.name;

  search = (text$: Observable<string>) => text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    filter(term => term.length >= 2),
    map(term => states.filter(state => new RegExp(term, 'mi').test(state.name)).slice(0, 10))
  )

  test(e){
    this.router.navigate(['Inicio/Perfil']);
    console.log(e.item);
  }

}
