import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Input } from './input';


@Injectable({
  providedIn: 'root'
})
export class InputService {
 
  fromData: Input ;
 
  constructor(private firestore: AngularFirestore) { }
  
  getInputs() {
    return this.firestore.collection('inputs').snapshotChanges();
  }
}
