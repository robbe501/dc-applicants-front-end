import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RisposteSelezionateService {
  risposteSelezionate: string[] = [];

  constructor() {}

  popLastRisposta() {
    if (this.risposteSelezionate.length > 0) {
      this.risposteSelezionate.pop();
    }
  }

  


}
