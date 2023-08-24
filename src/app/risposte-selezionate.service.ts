import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatiTest } from './svolgimento-test/dati-test';
@Injectable({
  providedIn: 'root'
})
export class RisposteSelezionateService {

  risposteSelezionate: string[] = [];

  test:number = 0
  pagina:number= 0
  dati:DatiTest[]=[]
  percentualeCorrette:number=0;

  private ENDPOINT = 'http://localhost:8080/api/test-service/'
  constructor(private http: HttpClient) { 
    this.getDati().subscribe((data)=> this.dati = data)  
  }

  popLastRisposta() {
    if (this.risposteSelezionate.length > 0) {
      this.risposteSelezionate.pop();
    }
  }
  getDati() {
     return this.http.get<DatiTest[]>(`${this.ENDPOINT}readAllTests`);
    }

     risposteCorrette: string[] = [];

    ottieniRisposteCorrette(){
      this.risposteCorrette = []
      for (const domanda of this.dati[this.test].domande) {
          this.risposteCorrette.push(domanda.corretta);
        }
      console.log(this.risposteCorrette);
    }
 



}
