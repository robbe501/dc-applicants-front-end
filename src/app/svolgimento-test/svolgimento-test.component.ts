import { Component, EventEmitter } from '@angular/core';
import { DatiTest } from './dati-test';
import { Output } from '@angular/core';

@Component({
  selector: 'app-svolgimento-test',
  templateUrl: './svolgimento-test.component.html',
  styleUrls: ['./svolgimento-test.component.css']
})
export class SvolgimentoTestComponent {

  @Output() arrayRisposte = new EventEmitter<String[]>();

  pagina:number = 0
  datiTest:DatiTest= {
    domanda0:'Come ti chiami?',
    risposte0: ['Francesco', 'Andrea', 'Michele', 'Federico'],
    domanda1: 'Qual è il tuo cognome',
    risposte1: ['Roberto', 'Giovanni', 'Fabrizio', 'Simone'],
    domanda2: 'Quanto fa 2+2?',
    risposte2: ['5','4', '3', '1'],
    domanda3: 'Cosa fa un programmatore?',
    risposte3: ['Munge le mucche', 'Annaffia le piante', 'Programma', 'Gioca a calcio']
  }
  rispostaSelezionata: string = '';
  risposteSelezionate: string[] = [];
  domanda:string= this.datiTest.domanda0
  risposte:string[] = this.datiTest.risposte0
  
   previousQuestion(){
    if(this.pagina == 1){
      this.domanda = this.datiTest.domanda0
      this.risposte = this.datiTest.risposte0
      this.pagina = this.pagina -1
      this.risposteSelezionate.pop()
    }  else  if(this.pagina == 2){
      this.domanda = this.datiTest.domanda1
      this.risposte = this.datiTest.risposte1
      this.pagina = this.pagina -1
      this.risposteSelezionate.pop()
    }   else  if(this.pagina == 3){
      this.domanda = this.datiTest.domanda2
      this.risposte = this.datiTest.risposte2
      this.pagina = this.pagina -1
      this.risposteSelezionate.pop()
    }   
        } 
  
  
  nextQuestion(){if(this.pagina == 0){
    this.domanda = this.datiTest.domanda1
    this.risposte = this.datiTest.risposte1
    this.pagina = this.pagina +1}
    else if(this.pagina == 1){
      this.domanda = this.datiTest.domanda2
      this.risposte = this.datiTest.risposte2
      this.pagina = this.pagina +1}
    else if(this.pagina == 2){
        this.domanda = this.datiTest.domanda3
        this.risposte = this.datiTest.risposte3
        this.pagina = this.pagina +1}
    this.aggiungiRisposta()
    console.log(this.risposteSelezionate)
  }
  aggiungiRisposta() {
    if (this.rispostaSelezionata) {
      this.risposteSelezionate.push(this.rispostaSelezionata);
      this.rispostaSelezionata = ''; // Resetta la risposta selezionata
    }
  }
  riepilogoButton(){
    this.aggiungiRisposta()
    console.log(this.risposteSelezionate)
    this.arrayRisposte.emit(this.risposteSelezionate)
  }
    
  }
