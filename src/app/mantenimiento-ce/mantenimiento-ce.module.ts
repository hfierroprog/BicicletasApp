import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MantenimientoCePageRoutingModule } from './mantenimiento-ce-routing.module';

import { MantenimientoCePage } from './mantenimiento-ce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MantenimientoCePageRoutingModule
  ],
  declarations: [MantenimientoCePage]
})
export class MantenimientoCePageModule {}
