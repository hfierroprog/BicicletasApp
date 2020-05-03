import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {Usuario} from '../vo/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private firestore: AngularFirestore) {
  }
  getAllUsuario(): Observable<any> {
    return this.firestore.collection<any>('mantenedor_usuario').valueChanges({idField: 'id'});
  }

  saveUsuario(usuario: Usuario) {
    this.firestore.collection<Usuario>('mantenedor_usuario').add({...usuario});
  }

  updateUsuario(id: string, usuario: Usuario) {
    this.firestore.collection('mantenedor_usuario').doc(id).update(usuario);
  }
  deteleUsuario(id: string) {
    this.firestore.collection('mantenedor_usuario').doc(id).delete();
  }
}
