import { Injectable } from '@angular/core';
import { Trail } from './trail';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Profile } from './profile';



@Injectable({
  providedIn: 'root'
})
export class CrudService {
  trailsCollection!: AngularFirestoreCollection<Trail>;
  profilesCollection!: AngularFirestoreCollection<Profile>;
  trails: Observable<any[]>;
  profiles: Observable<any[]>;
  trailDoc!: AngularFirestoreDocument<Trail>;
  profileDoc!: AngularFirestoreDocument<Profile>

  constructor( public afs: AngularFirestore) {
   
    this.trails = this.afs.collection<any>('trails').snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        // const id = a.payload.doc.id;
        data.id = a.payload.doc.id;
        console.log( data);
        // return {id, data};
        return data;
      });
    }))

    this.trailsCollection = this.afs.collection('trails');

    this.profiles = this.afs.collection<any>('profiles').snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        // const id = a.payload.doc.id;
        data.id = a.payload.doc.id;
        console.log( data);
        // return {id, data};
        return data;
      });
    }))

    this.profilesCollection = this.afs.collection('profiles');
   }

  getTrails() {
    return this.trails;
  }

  addTrail(trail: any) {
    this.trailsCollection.add(trail);
  }

  deleteTrail(trail: any) {
   this.trailDoc = this.afs.doc(`trails/${trail.id}`);
   this.trailDoc.delete();
  }

  updateTrail(trail: any) {
    this.trailDoc = this.afs.doc(`trails/${trail.id}`);
    this.trailDoc.update(trail);
  }

  addProfile(name: string, data: any) {
    this.profilesCollection.doc(name).set(data);
  }

  getProfile() {
    console.log(this.profiles);
    return this.profiles;
  }
}
