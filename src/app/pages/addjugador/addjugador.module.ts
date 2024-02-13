import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddjugadorPageRoutingModule } from './addjugador-routing.module';

import { AddjugadorPage } from './addjugador.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddjugadorPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AddjugadorPage]
})
export class AddjugadorPageModule {}
