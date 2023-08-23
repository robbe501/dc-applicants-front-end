import { Component } from '@angular/core';
import { Candidato } from 'src/app/model/candidato-model';

@Component({
  selector: 'app-ricerca-candidati',
  templateUrl: './ricerca-candidati.component.html',
  styleUrls: ['./ricerca-candidati.component.css']
})
export class RicercaCandidatiComponent {

  candidati! : Candidato[] ;

  onDataReady(data: any) {
    this.candidati = data;
  }
}
