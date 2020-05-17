import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardService } from './service/guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { canActivate: [GuardService] ,path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'form-usuario',
    canActivate: [GuardService],
    loadChildren: () => import('./form-usuario/form-usuario.module').then( m => m.FormUsuarioPageModule)
  },
  {
    path: 'mantenimiento-ce',
    canActivate: [GuardService],
    loadChildren: () => import('./mantenimiento-ce/mantenimiento-ce.module').then( m => m.MantenimientoCePageModule)
  },
  {
    path: 'menu',
    canActivate: [GuardService], 
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
  providers: [GuardService]
})
export class AppRoutingModule { }
