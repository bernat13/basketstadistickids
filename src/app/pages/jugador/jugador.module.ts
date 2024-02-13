import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JugadorPageRoutingModule } from './jugador-routing.module';

import { JugadorPage } from './jugador.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JugadorPageRoutingModule,
    ComponentsModule
  ],
  declarations: [JugadorPage]
})
export class JugadorPageModule {}
