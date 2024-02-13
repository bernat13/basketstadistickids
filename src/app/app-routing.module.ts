import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'jugador',
    loadChildren: () => import('./pages/jugador/jugador.module').then( m => m.JugadorPageModule)
  },
  {
    path: 'partido',
    loadChildren: () => import('./pages/partido/partido.module').then( m => m.PartidoPageModule)
  },
  {
    path: 'addpartido',
    loadChildren: () => import('./pages/addpartido/addpartido.module').then( m => m.AddpartidoPageModule)
  },
  {
    path: 'addjugador',
    loadChildren: () => import('./pages/addjugador/addjugador.module').then( m => m.AddjugadorPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
