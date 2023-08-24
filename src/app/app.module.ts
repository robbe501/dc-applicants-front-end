import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ModuloComponent } from './signup/signup.component';

import { TabViewModule } from 'primeng/tabview';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';

import { RegistrationService } from './services/registration.service';
import { Form1Component } from './signup/form1/form1.component';
import { Form2Component } from './signup/form2/form2.component';
import { Form3Component } from './signup/form3/form3.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ModuloComponent,
    Form1Component,
    Form2Component,
    Form3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    TabViewModule,
    StepsModule,
    ToastModule

  ],
  providers: [RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
