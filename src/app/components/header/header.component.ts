import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() isLogout = new EventEmitter<void> ()
  isSignedIn: boolean = false;

  constructor( public authService: AuthService) { }

  ngOnInit(): void {
    // if (localStorage.getItem('user') !== null) {
    //   this.isSignedIn = true;
    // } else {
    //   this.isSignedIn = false;
    // }
  }

  handleLogout() {
    // this.isSignedIn = false;
    // console.log(this.isSignedIn)
    this.authService.logout();
    this.isLogout.emit()
  }

}
