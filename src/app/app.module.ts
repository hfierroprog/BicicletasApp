import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageModule } from './home/home.module';
import { firebaseConfig } from '../environments/firebaseConfig';
import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {BicicletaService} from './service/bicicleta.service';
import {EstacionService} from './service/estacion.service';
import {Usuario} from './vo/usuario';
import {UsuarioService} from './service/usuario.service';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HomePageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
    ],
  // servicios agregar
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      BicicletaService,
      EstacionService,
      UsuarioService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
