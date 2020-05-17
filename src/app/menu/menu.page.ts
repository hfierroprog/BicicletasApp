import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';
import {HomePage} from '../home/home.page';
import {HomePageModule} from '../home/home.module';
import {R3HostMetadata} from '@angular/compiler';
import { GuardService } from '../service/guard.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {

  constructor(
      private router: Router,
      private guardService: GuardService) {
  }

  irUsuarios() {
    this.router.navigate(['home']);
  }

  cerrarSesion() {
    this.guardService.logout();
    this.router.navigate(['login']);
  }
}
