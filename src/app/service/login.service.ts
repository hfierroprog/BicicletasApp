import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Usuario } from '../vo/usuario';
import { Login } from '../vo/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private firestore: AngularFirestore) {
  }
  getAllLogin(): Observable<any> {
    return this.firestore.collection<any>('login').valueChanges({idField: 'id'});
  }

  getUserByUsername(username: string): Observable<any> {
    return this.firestore.collection<any>('login', ref => ref.where('usuario', '==', username)).valueChanges();
  }
}
