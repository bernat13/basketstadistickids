import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partido',
  templateUrl: './partido.page.html',
  styleUrls: ['./partido.page.scss'],
})
export class PartidoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  addPuntos(puntos:number){
    console.log("Añadir puntos:",puntos);
  }
 
  addAsistencia(){
    console.log("Añadir asistencias:");
  }
  addRebote(){
    console.log("Añadir rebotes:");
  }
  addRobo(){
    console.log("Añadir robos:");
  }
  addTapon(){
    console.log("Añadir tapones:");
  }


}
