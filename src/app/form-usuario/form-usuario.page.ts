import { Component, OnInit } from '@angular/core';
import {Usuario} from '../vo/usuario';
import {UsuarioService} from '../service/usuario.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.page.html',
  styleUrls: ['./form-usuario.page.scss'],
})
export class FormUsuarioPage implements OnInit {
  usuario: Usuario;
  isUpdate: boolean;

  constructor(private usuarioService: UsuarioService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.usuario = this.router.getCurrentNavigation().extras.state.user;
        this.isUpdate = this.usuario.id ? true : false;
      }
    });
  }

  ngOnInit() {
  }

  guardarUsuario() {
    if (this.isUpdate) {
      this.usuarioService.updateUsuario(this.usuario.id, this.usuario);
    } else {
      this.usuarioService.saveUsuario(this.usuario);
    }
    this.router.navigate(['home']);
  }
}
