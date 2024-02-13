import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addjugador',
  templateUrl: './addjugador.page.html',
  styleUrls: ['./addjugador.page.scss'],
})
export class AddjugadorPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  addJugador() {
    console.log('addJugador');
  }
}
