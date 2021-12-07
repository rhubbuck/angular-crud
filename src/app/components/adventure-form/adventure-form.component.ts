import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { CrudService } from 'src/app/shared/crud.service';
import { Trail } from 'src/app/shared/trail';
import { Profile } from 'src/app/shared/profile';


@Component({
  selector: 'app-adventure-form',
  templateUrl: './adventure-form.component.html',
  styleUrls: ['./adventure-form.component.css']
})
export class AdventureFormComponent implements OnInit {

  adventureForm!: FormGroup;
  currentUser: any;
  profiles!: Profile[];
  creatorName!: any;
  
  trail: Trail = {
    name: '',
    location: '',
    date:'',
    note: '',
    routeType:({
      typeOfRoute: ''
    })
  }

  constructor( public fb: FormBuilder, 
               public crudService: CrudService, 
               public firebaseAuth: AngularFireAuth, 
               public authService: AuthService) 
               {
                this.currentUser = authService.currentUser;
                }

  

  ngOnInit(): void {
    
    this.crudService.getProfile().subscribe(profiles => {
      this.profiles = profiles.filter(item => item.user === this.currentUser)
      this.creatorName = this.profiles[0].name;
      console.log(this.creatorName);
        this.initializeForm();
    })

  
  }


  initializeForm(): void {
    this.adventureForm = this.fb.group({
      name: '',
      user: this.authService.currentUser,
      creatorName: this.creatorName,
      location: '',
      date:'',
      note: '',
      routeType: this.fb.group({
        typeOfRoute: ''
      })
    });
  }

  onSubmit(): void{
    this.crudService.addTrail(this.adventureForm.value);
    this.adventureForm.reset();
  }

}

