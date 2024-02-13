import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddjugadorPage } from './addjugador.page';

const routes: Routes = [
  {
    path: '',
    component: AddjugadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddjugadorPageRoutingModule {}
