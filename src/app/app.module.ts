import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RiepilogoTestComponent } from './riepilogo-test/riepilogo-test.component';
import { SvolgimentoTestComponent } from './svolgimento-test/svolgimento-test.component';
import { TestHomeComponent } from './test-home/test-home.component';
@NgModule({
  declarations: [
    AppComponent,
    TestHomeComponent,
    SvolgimentoTestComponent,
    RiepilogoTestComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
