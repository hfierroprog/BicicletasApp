import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BicicletaService {

  constructor(private fireStore: AngularFirestore) { }

  getAllBicicletas(): Observable<any> {
    return this.fireStore.collection<any>( 'bicicleta' ).valueChanges();
  }
}
