import { Component } from '@angular/core';
import { CandidatoLight } from 'src/app/model/candidato-model';

@Component({
  selector: 'app-ricerca-candidati',
  templateUrl: './ricerca-candidati.component.html',
  styleUrls: ['./ricerca-candidati.component.css']
})
export class RicercaCandidatiComponent {

  candidati! : CandidatoLight[] ;

  onDataReady(data: any) {
    this.candidati = data;
  }
}
