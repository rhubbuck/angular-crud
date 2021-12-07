import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Output() toLogin = new EventEmitter<void> ();
  isSignedIn: boolean = false;
  signUpForm!: FormGroup;

  constructor( public authService: AuthService, public fb: FormBuilder) { }

  ngOnInit(): void {

    this.initializeForm();

    if (localStorage.getItem('user') !== null) {
      this.isSignedIn = true;
    } else {
      this.isSignedIn = false;
    }
  }

  initializeForm(): void {
    this.signUpForm = this.fb.group({
      email: '',
      password: ''
    });
  }

  async onSignUp() {
    let emailValue = this.signUpForm.get('email')?.value;
    let passwordValue = this.signUpForm.get('password')?.value;

    await this.authService.signUp(emailValue, passwordValue);
      if(this.authService.isLoggedIn) 
        this.isSignedIn = true
      this.signUpForm.reset();
      console.log(this.isSignedIn)
      this.toLogin.emit();
  }

  handleToLogin() {
    this.toLogin.emit();
  }
}
