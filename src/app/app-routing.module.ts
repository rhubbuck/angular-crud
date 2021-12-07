import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdventureFormComponent } from './components/adventure-form/adventure-form.component';
import { FeedComponent } from './components/feed/feed.component';
import { YourAccountComponent } from './components/your-account/your-account.component';
import { SiteInfoComponent } from './components/site-info/site-info.component';
import { AboutFormComponent } from './components/about-form/about-form.component';
import { ProfileModalComponent } from './components/profile-modal/profile-modal.component';

const routes: Routes = [
  { path: 'home', component: FeedComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'adventure-form', component: AdventureFormComponent},
  { path: 'account', component: YourAccountComponent},
  { path: 'about', component: SiteInfoComponent},
  { path: 'account-about', component: AboutFormComponent},
  { path: 'user-profile', component: ProfileModalComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
