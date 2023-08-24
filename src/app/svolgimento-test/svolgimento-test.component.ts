import { Component, EventEmitter, Output } from '@angular/core';
import { RisposteSelezionateService } from '../risposte-selezionate.service';
import { DatiTest } from './dati-test';

@Component({
  selector: 'app-svolgimento-test',
  templateUrl: './svolgimento-test.component.html',
  styleUrls: ['./svolgimento-test.component.css']
})
export class SvolgimentoTestComponent {

  @Output() arrayRisposte = new EventEmitter<String[]>();

  constructor(private rs: RisposteSelezionateService) {}

  pagina:number = 0
  datiTest: DatiTest = {
    test_id: 1, 
    tipologia: 'basic', 
    domande: [
      {
        domanda: 'Come ti chiami?',
        risposte: ['Francesco', 'Andrea', 'Michele', 'Federico'],
        risposta_corretta: 'Francesco',
      },
      {
        domanda: 'Qual è il tuo cognome',
        risposte: ['Roberto', 'Giovanni', 'Fabrizio', 'Simone'],
        risposta_corretta: 'Roberto',
      },
      {
        domanda: 'Quanto fa 2+2?',
        risposte: ['5', '4', '3', '1'],
        risposta_corretta: '4',
      },
      {
        domanda: 'Cosa fa un programmatore?',
        risposte: [
          'Munge le mucche',
          'Annaffia le piante',
          'Programma',
          'Gioca a calcio',
        ],
        risposta_corretta: 'Programma',
      },
    ],
  };

  rispostaSelezionata: string = '';
  
  domanda: string = this.datiTest.domande[this.pagina].domanda;
  risposte: string[] = this.datiTest.domande[this.pagina].risposte;
  
  previousQuestion() {
    if (this.pagina > 0) {
      this.pagina = this.pagina - 1;
      this.domanda = this.datiTest.domande[this.pagina].domanda;
      this.risposte = this.datiTest.domande[this.pagina].risposte;
      this.rs.popLastRisposta(); // Usa il metodo del servizio per rimuovere l'ultima risposta
    }
  }
  
  
  
  nextQuestion() {
    if (this.pagina < this.datiTest.domande.length - 1) { // Verifica se non siamo già all'ultima domanda
      this.pagina = this.pagina + 1; // Aumenta l'indice della pagina per passare alla domanda successiva
      this.domanda = this.datiTest.domande[this.pagina].domanda; // Aggiorna il testo della nuova domanda corrente
      this.risposte = this.datiTest.domande[this.pagina].risposte; // Aggiorna le risposte corrispondenti alla nuova domanda
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
