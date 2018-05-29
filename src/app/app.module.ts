import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';




const appRoutes: Routes = [
  {path:'home',component: HomeComponent},
  {
  path:'login',
  component: LoginComponent
},
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: LoginComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
	RouterModule.forRoot(
	 appRoutes,
      { enableTracing: true } 
	)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
