import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// imports for firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { NavdetailsComponent } from './templates/navdetails.component';
import { TemplateComponent } from './template/template.component';


// firebase config files

const firebaseConfig = {

  apiKey: "AIzaSyBdm-qpmJ1T2zoshYD0wimyDtHfuULBhOw",
  authDomain: "placementdb-11901.firebaseapp.com",
  projectId: "placementdb-11901",
  storageBucket: "placementdb-11901.appspot.com",
  messagingSenderId: "1021645127901",
  appId: "1:1021645127901:web:099fce51abed1006161b34"

}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    NavbarComponent,
    NavdetailsComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatInputModule,

    MatFormFieldModule,
    MatCardModule,

    MatTabsModule,
    MatIconModule,
    MatTableModule,

    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
