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
  newArray: any;
  newObject: any;

  constructor( public crudService: CrudService ) {

   }

  ngOnInit(): void {

    this.crudService.getTrails().subscribe(trails => {
      this.trails = trails;
      // trails.filter(item => this.creatorName = item.creatorName );
      // trails.map(trail => console.log(trail.creatorName))
    });

    this.crudService.getProfile().subscribe(profiles => {
      this.profiles = profiles
      // console.log(this.profiles)
    })

    console.log(this.trails);
    console.log(this.profiles)

  }

    openModal() {
      this.showModal = true;
      console.log(this.trails.map(trail => trail.creatorName));
      // console.log(this.trails);
      // console.log(this.profiles);
      this.newArray = this.trails.concat(this.profiles);
      console.log(this.newArray);
      // for (var i = 0; i < this.newArray.length; i++) {
      //    console.log(this.newArray[i]); 
        //  this.newObject = { ...this.newArray[0], ...this.newArray[1] };
        //  console.log(this.newObject)
        // }
        // this.newObject = { ...this.newArray[2], ...this.newArray[1] };
        // console.log(this.newObject)
     
    }

    closeModal() {
      this.showModal = false;
    }
    
    setModalInfo(creatorName: string, creatorLocation: string, creatorBio: string) {
      creatorName = this.creatorName;
      creatorLocation = this.creatorLocation;
      creatorBio = this.creatorBio
    }
}
