import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import{MatSnackBarModule} from '@angular/material/snack-bar';
import {MatRadioModule} from '@angular/material/radio';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';

import { IssueService} from './issue.service';
import { HomeComponent } from './components/home/home.component';
import { ForgetComponent } from './components/forget/forget.component';
import { SlotsComponent } from './components/slots/slots.component';
import { CarComponent } from './components/car/car.component';
import { PayComponent } from './components/pay/pay.component';

const routes : Routes = [
  { path : 'signin', component : SigninComponent},
  { path : 'signup', component : SignupComponent},
  { path : 'home', component : HomeComponent},
  { path : 'forget', component : ForgetComponent},
  { path : 'slots', component : SlotsComponent},
  { path : 'car', component : CarComponent},
  { path : 'pay', component : PayComponent},
  { path : '', redirectTo : 'home', pathMatch : 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    ForgetComponent,
    SlotsComponent,
    CarComponent,
    PayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatRadioModule
  ],
 
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
