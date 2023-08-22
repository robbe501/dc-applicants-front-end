import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RicercaCandidatiComponent } from './components/ricerca-candidati/ricerca-candidati.component';

const routes: Routes = [
  { path: '', component: RicercaCandidatiComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
