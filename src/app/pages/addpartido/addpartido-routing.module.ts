import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddpartidoPage } from './addpartido.page';

const routes: Routes = [
  {
    path: '',
    component: AddpartidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddpartidoPageRoutingModule {}
