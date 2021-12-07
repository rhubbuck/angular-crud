import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSignedIn: boolean = false;
  isSignup: boolean = false;
  items!: Observable<any[]>;
  currentUser: any;
  

  constructor(firestore: AngularFirestore, public authService: AuthService, firebaseAuth: AngularFireAuth) {
    this.items = firestore.collection('items').valueChanges();

    firebaseAuth.authState.subscribe(user => {
      console.log(user?.uid);
      this.currentUser = user?.uid;
    });
    
  }

  handleLogin() {
    this.isSignedIn = true;
  }

  handleLogout() {
    this.isSignedIn = false;
  }

  handleToSignup() {
    this.isSignup = true;
  }

  handleToLogin() {
    this.isSignup = false;
  }

}
