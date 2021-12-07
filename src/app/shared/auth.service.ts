import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  currentUser: any;

  constructor( public firebaseAuth: AngularFireAuth) {
    firebaseAuth.authState.subscribe(user => {
      console.log(user?.uid);
      this.currentUser = user?.uid;
      console.log(this.currentUser)
    });
   }

  async signIn(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(response => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(response.user))
      })
  }

  async signUp(email: string, password: string) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(response => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(response.user))
      })
  }

  logout(){
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
    this.isLoggedIn = false;
  }
}
