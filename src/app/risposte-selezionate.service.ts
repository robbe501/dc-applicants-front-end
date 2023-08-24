import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatiTest } from './svolgimento-test/dati-test';
@Injectable({
  providedIn: 'root'
})
export class RisposteSelezionateService {
  risposteSelezionate: string[] = [];
  test:number = 0
  private ENDPOINT = 'http://localhost:8080/api/test-service/'
   dati:DatiTest[]=[]
  constructor(private http: HttpClient) {   
  }

  popLastRisposta() {
    if (this.risposteSelezionate.length > 0) {
      this.risposteSelezionate.pop();
    }
  }
  getDati() {
     return this.http.get<DatiTest[]>(`${this.ENDPOINT}readAllTests`);
    }

}
