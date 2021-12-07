import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() isLogin = new EventEmitter<void> ();
  @Output() toSignup = new EventEmitter<void> ();
  isSignedIn: boolean = false;
  signInForm!: FormGroup;

  constructor( public authService: AuthService, public fb: FormBuilder, private angularAuth: AngularFireAuth ) { }

  ngOnInit(): void {

    this.initializeForm();

    if (localStorage.getItem('user') !== null) {
      this.isSignedIn = true;
    } else {
      this.isSignedIn = false;
    }
  }

  initializeForm(): void {
    this.signInForm = this.fb.group({
      email: '',
      password: ''
    });
  }

  async onSignIn() {
    let emailValue = this.signInForm.get('email')?.value;
    let passwordValue = this.signInForm.get('password')?.value;

    await this.authService.signIn(emailValue, passwordValue);
    console.log(emailValue, passwordValue);
      if(this.authService.isLoggedIn) 
        this.isSignedIn = true
      this.signInForm.reset();
      console.log(this.isSignedIn)
      this.isLogin.emit();
  }

  handleLogout() {
    this.isLogin.emit();
    this.authService.logout()
  }

  handleToSignup() {
    this.toSignup.emit();
  }
}
