import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Login } from '../vo/login';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { GuardService } from '../service/guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuarioInput: Login = new Login();

  constructor(private loginService: LoginService,
              private router: Router,
              private toastController: ToastController,
              private guardService: GuardService) { }

  ngOnInit() {
  }

  loginSubmit() {
    this.loginService.getUserByUsername(this.usuarioInput.usuario).subscribe((data: Login[]) => {
      if(data.length > 0){
        if(this.usuarioInput.usuario === data[0].usuario && this.usuarioInput.password === data[0].password) {
          this.guardService.login();
          this.router.navigate(['menu']);
        } else {
          this.mostrarToast();
        } 
      } else {
        this.mostrarToast();
      }
    });
  }

  async mostrarToast() {
    const toast = await this.toastController.create({
      message: 'Usuario o contraseña no validos, favor reintentar.',
      duration: 2000
    });
    toast.present();
  } 
}
