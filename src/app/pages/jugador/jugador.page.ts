import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.page.html',
  styleUrls: ['./jugador.page.scss'],
})
export class JugadorPage implements OnInit {

  partidos = [{rival:'Golden State Warriors', fecha:'2020-01-01'},];
  constructor(private router:Router) { }

  ngOnInit() {
  }

  addPartido() {
    console.log('addPartido');
    this.router.navigate(['addpartido/']);

  }
}
