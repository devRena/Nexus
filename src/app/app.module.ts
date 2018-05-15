import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
	RouterModule.forRoot([
	{path:'home',component: HomeComponent},
	{path:'login',component: LoginComponent}
	])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
