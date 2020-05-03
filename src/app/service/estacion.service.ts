import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EstacionService {

    constructor(private firestore: AngularFirestore) {
    }

    getAllEstacion(): Observable<any> {
        return this.firestore.collection<any>('estacion').valueChanges();
    }
}
