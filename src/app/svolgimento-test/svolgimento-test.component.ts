import { Component, EventEmitter, Output } from '@angular/core';
import { RisposteSelezionateService } from '../risposte-selezionate.service';
import { DatiTest } from './dati-test';

@Component({
  selector: 'app-svolgimento-test',
  templateUrl: './svolgimento-test.component.html',
  styleUrls: ['./svolgimento-test.component.css']
})
export class SvolgimentoTestComponent {
  
  dati:DatiTest[]=[]
  @Output() arrayRisposte = new EventEmitter<String[]>();
  domanda:string = ''
  risposte:string[]=[]
  
  constructor(private rs: RisposteSelezionateService) {
    this.rs.getDati().subscribe((data) => {
      this.dati = data});
     setTimeout(()=>  {this.domanda = this.dati[this.rs.test].domande[this.pagina].domanda
      this.risposte= this.dati[this.rs.test].domande[this.pagina].risposte;
    console.log(this.risposte)},100) ;
  }

  pagina:number = 0
  
  rispostaSelezionata: string = '';
    
  previousQuestion() {
    if (this.pagina > 0) {
      this.pagina = this.pagina - 1;
      this.domanda = this.dati[this.rs.test].domande[this.pagina].domanda;
      this.risposte = this.dati[this.rs.test].domande[this.pagina].risposte;
      this.rs.popLastRisposta(); // Usa il metodo del servizio per rimuovere l'ultima risposta
    }
  }
  
  nextQuestion() {
    if (this.pagina < this.dati[this.pagina].domande.length - 1) { // Verifica se non siamo già all'ultima domanda
      this.pagina = this.pagina + 1; // Aumenta l'indice della pagina per passare alla domanda successiva
      this.domanda = this.dati[this.rs.test].domande[this.pagina].domanda;// Aggiorna il testo della nuova domanda corrente
      this.risposte = this.dati[this.rs.test].domande[this.pagina].risposte; // Aggiorna le risposte corrispondenti alla nuova domanda
      this.aggiungiRisposta(); // Aggiungi la risposta selezionata alla lista
    }
  }
    
  aggiungiRisposta() {
    if (this.rispostaSelezionata) {
      this.rs.risposteSelezionate.push(this.rispostaSelezionata);
      this.rispostaSelezionata = ''; // Resetta la risposta selezionata
    }
  }
  
  riepilogoButton(){
    this.aggiungiRisposta()
  }
    
  }
