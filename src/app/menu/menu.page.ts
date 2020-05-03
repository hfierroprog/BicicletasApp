import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';
import {HomePage} from '../home/home.page';
import {HomePageModule} from '../home/home.module';
import {R3HostMetadata} from '@angular/compiler';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {

  constructor(
      private router: Router) {
  }

  irUsuarios() {
    this.router.navigate(['home']);
  }
}
