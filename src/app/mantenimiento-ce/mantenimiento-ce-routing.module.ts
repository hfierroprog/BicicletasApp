import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MantenimientoCePage } from './mantenimiento-ce.page';

const routes: Routes = [
  {
    path: '',
    component: MantenimientoCePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MantenimientoCePageRoutingModule {}
