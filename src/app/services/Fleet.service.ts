import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class FleetService {

  collectionName = 'Fleet';

  constructor(
    private firestore: AngularFirestore
  ) { }

  create_Fleet(Fleet) {
    return this.firestore.collection(this.collectionName).add(Fleet);
  }

  read_Fleet() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  update_Fleet(Fleet,FleetID) {
    this.firestore.doc(this.collectionName + '/' + FleetID).update(Fleet);
  }

  delete_Fleet(FleetID) {
    this.firestore.doc(this.collectionName + '/' + FleetID).delete();
  }
}