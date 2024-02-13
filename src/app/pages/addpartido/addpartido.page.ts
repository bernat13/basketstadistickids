import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addpartido',
  templateUrl: './addpartido.page.html',
  styleUrls: ['./addpartido.page.scss'],
})
export class AddpartidoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  addPartido() {
    console.log('addPartido');
  }
}
