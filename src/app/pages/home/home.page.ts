import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  jugadores = [{id:1,nombre:'Pau Gasol', dorsal:16, equipo:'Los Angeles Lakers'},];
  constructor(private router: Router) {}

  addJugador() {
   console.log('addJugador');
    this.router.navigate(['addjugador/']);
  }

  logout() {
    console.log('logout');

  
  }
      

}
