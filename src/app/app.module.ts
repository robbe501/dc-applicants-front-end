import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DropdownModule } from 'primeng/dropdown';

import { FilterFormComponent } from './components/ricerca-candidati/components/filter-form/filter-form.component';
import { FilterTableComponent } from './components/ricerca-candidati/components/filter-table/filter-table.component';
import { RicercaCandidatiComponent } from './components/ricerca-candidati/ricerca-candidati.component';

@NgModule({
  declarations: [
    AppComponent,
    RicercaCandidatiComponent,
    FilterFormComponent,
    FilterTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    HttpClientModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
