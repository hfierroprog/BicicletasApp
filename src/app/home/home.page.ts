import { Component } from '@angular/core';
import {BicicletaService} from '../service/bicicleta.service';
import {EstacionService} from '../service/estacion.service';
import {Bicicleta} from '../vo/bicicleta';
import {UsuarioService} from '../service/usuario.service';
import {Usuario} from '../vo/usuario';
import {NavigationExtras, Router} from '@angular/router';

import * as XLSX from 'xlsx';
// @ts-ignore
import {UsuarioReporte} from '../vo/usuario-reporte';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  bicicletas: Bicicleta;
  listaCompleta: Usuario [];
  listaReporte: UsuarioReporte [] = new Array();
  pantalla: Usuario[];
  constructor(private bicicletaService: BicicletaService,
              private estacionService: EstacionService,
              private usuarioService: UsuarioService,
              private router: Router) {
    bicicletaService.getAllBicicletas().subscribe(data => {
      this.bicicletas = data;
    });
    estacionService.getAllEstacion().subscribe(data => {
      console.log(data);
    } );
    usuarioService.getAllUsuario().subscribe( data => {
      console.log(data);
      this.listaCompleta = (data);
      this.pantalla = data;
    } );
  }
  irFormulario(usuario?: Usuario) {
    usuario = usuario ? usuario : new Usuario();
    const navigationExtras: NavigationExtras = {
      state: {
        user: usuario
      }
    };
    this.router.navigate(['form-usuario'], navigationExtras);
  }
  irMantenimientoce() {
    this.router.navigate( ['mantenimiento-ce']);
  }

  isAdmin(usuario: Usuario) {
    const respuesta = usuario.rolAdmin ? 'Si' : 'No';
    return respuesta;
  }
  buscarUsuario($event: any) {
    console.log($event.detail.value);
    const nombre = $event.detail.value;
    this.pantalla = this.listaCompleta.filter(user => user.nombre.toUpperCase().includes(nombre.toUpperCase())) ;
  }
  eliminarUsuario(id: string) {
      this.usuarioService.deteleUsuario(id);

  }

  exportarExcel() {
    this.generarUsuariosReporte();
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.listaReporte);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'reporte');

    /* save to file */
    XLSX.writeFile(wb, 'reporte.xlsx');
  }

  generarUsuariosReporte() {
    this.listaCompleta.forEach(data => {
      delete data.id;
      this.listaReporte.push(data);
    });
  }
}
