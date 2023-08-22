import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RicercaCandidatiComponent } from './components/ricerca-candidati/ricerca-candidati.component';
import { FilterFormComponent } from './components/filter-form/filter-form.component';
import { FilterTableComponent } from './components/ricerca-candidati/components/filter-table/filter-table.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterFormComponent,
    RicercaCandidatiComponent,
    FilterTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
