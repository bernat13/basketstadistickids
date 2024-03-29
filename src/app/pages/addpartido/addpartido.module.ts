import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddpartidoPageRoutingModule } from './addpartido-routing.module';

import { AddpartidoPage } from './addpartido.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddpartidoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AddpartidoPage]
})
export class AddpartidoPageModule {}
