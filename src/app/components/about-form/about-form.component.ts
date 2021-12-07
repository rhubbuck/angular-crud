import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/shared/crud.service';
import { Profile } from 'src/app/shared/profile';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-about-form',
  templateUrl: './about-form.component.html',
  styleUrls: ['./about-form.component.css']
})
export class AboutFormComponent implements OnInit {

  aboutForm!: FormGroup;
  currentUser: any;

  profile: Profile = {
    name: '',
    bio: '',
    location: '',
  }

  constructor( private fb: FormBuilder, public crudService: CrudService, public authService: AuthService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.aboutForm = this.fb.group({
      name: '',
      bio: '',
      location: '',
      user: this.authService.currentUser
    });
  }

  onSubmit(): void{
    this.crudService.addProfile(`${this.authService.currentUser}`,this.aboutForm.value);
    this.aboutForm.reset();
  }

}
