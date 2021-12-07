import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { HttpClientModule } from '@angular/common/http';

import { CrudService } from './shared/crud.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutFormComponent } from './components/about-form/about-form.component';
import { AdventureFormComponent } from './components/adventure-form/adventure-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeedComponent } from './components/feed/feed.component';
import { YourAccountComponent } from './components/your-account/your-account.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { SiteInfoComponent } from './components/site-info/site-info.component';
import { AuthService } from './shared/auth.service';
import { ProfileModalComponent } from './components/profile-modal/profile-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    AboutFormComponent,
    AdventureFormComponent,
    FeedComponent,
    YourAccountComponent,
    SiteInfoComponent,
    ProfileModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LayoutModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,    
    AngularFirestoreModule,  
    HttpClientModule
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAuth(() => getAuth()),
    // provideDatabase(() => getDatabase()),
    // provideFirestore(() => getFirestore()),
    // provideFunctions(() => getFunctions()),
    // provideRemoteConfig(() => getRemoteConfig()),
    // provideStorage(() => getStorage())
  ],
  providers: [CrudService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
