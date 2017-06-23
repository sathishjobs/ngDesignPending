import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import {MdInputModule, MdButtonModule,MdCheckboxModule} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './login/forgotpassword/forgotpassword.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotpasswordComponent,
    RegisterComponent
  
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,MaterialModule,
    MdInputModule,MdButtonModule,MdCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
