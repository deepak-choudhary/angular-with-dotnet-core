import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

const MyRoute:Routes=[
  {path:'Register',component:RegisterComponent},
  {path:'Login',component:LoginComponent},
  {path:'Home',component:HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,RouterModule,
    HttpClientModule,RouterModule.forRoot(MyRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
