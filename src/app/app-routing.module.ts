import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'form-usuario',
    loadChildren: () => import('./form-usuario/form-usuario.module').then( m => m.FormUsuarioPageModule)
  },
  {
    path: 'mantenimiento-ce',
    loadChildren: () => import('./mantenimiento-ce/mantenimiento-ce.module').then( m => m.MantenimientoCePageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
