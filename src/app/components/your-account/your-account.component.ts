import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/shared/crud.service';
import { Trail } from 'src/app/shared/trail';
import { Profile } from 'src/app/shared/profile';
import { faEdit, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-your-account',
  templateUrl: './your-account.component.html',
  styleUrls: ['./your-account.component.css']
})
export class YourAccountComponent implements OnInit {

  trails!: Trail[];
  profiles!: Profile[];
  editState: boolean = false;
  itemToEdit!: any;
  faEdit = faEdit;
  faWindowClose = faWindowClose;
  username: any;
  currentUser: any;

  constructor( private router : Router, public crudService: CrudService, public authService: AuthService) {
    this.currentUser = authService.currentUser;
   }

  btnClick=  () => {
    this.router.navigateByUrl('/adventure-form');
};

  ngOnInit(): void {
    this.crudService.getTrails().subscribe(trails => {
      trails.map(trail => {
        this.username = trail.user
      });
      this.trails = trails.filter(item => item.user === this.currentUser)  
    });

    this.crudService.getProfile().subscribe(profiles => {
      this.profiles = profiles.filter(item => item.user === this.currentUser)
      console.log(this.profiles)
    })
  }


  deleteTrail(event: any, trail: any) {
    this.clearState();
    this.crudService.deleteTrail(trail);
  }

  editItem(event: any, trail: any){
    this.editState = true;
    this.itemToEdit = trail;
  }

  updateItem(trail: any){
    this.crudService.updateTrail(trail);
    this.clearState();
  }

  clearState(){
    this.editState = false;
    this.itemToEdit = null;
  }

}
