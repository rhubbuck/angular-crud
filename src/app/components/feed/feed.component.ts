import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/shared/crud.service';
import { Profile } from 'src/app/shared/profile';
import { Trail } from 'src/app/shared/trail';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  trails!: Trail[];
  showModal = false;
  profiles!: Profile[];
  creatorName: any;
  creatorLocation: any;
  creatorBio: any;

  constructor( public crudService: CrudService ) {

   }

  ngOnInit(): void {

    this.crudService.getTrails().subscribe(trails => {
      this.trails = trails;
    });

    this.crudService.getProfile().subscribe(profiles => {
      this.profiles = profiles
    })

  }

}
