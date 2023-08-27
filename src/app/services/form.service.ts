import { Injectable } from '@angular/core';
import { Candidato } from '../signup/interfaces/candidato';
import { Anagrafica } from '../signup/interfaces/anagrafica';
import { Esperienza } from '../signup/interfaces/esperienza';
import { Titoli } from '../signup/interfaces/titoli';

@Injectable({
  providedIn: 'root'
})

export class FormService {

  constructor() { }

  candidato: Candidato = { // Inizializza l'oggetto candidato con proprietà vuote o valori di default
    anagrafica: null,
    titoli: null,
    esperienza: null,
    // Altre proprietà di Candidato...
  };

  addAnagrafica(formAnagrafica:Anagrafica){
    this.candidato.anagrafica=formAnagrafica;
  }

  addTitoli(formTitoli:Titoli){
    this.candidato.titoli=formTitoli;
  }

  addEsperienza(formEsperienza:Esperienza){
    this.candidato.esperienza=formEsperienza;
  }

  logCandidato(){
    console.log(this.candidato);

  }

}
