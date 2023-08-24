import { Component } from '@angular/core';
import { RisposteSelezionateService } from '../risposte-selezionate.service';

@Component({
  selector: 'app-riepilogo-test',
  templateUrl: './riepilogo-test.component.html',
  styleUrls: ['./riepilogo-test.component.css']
})
export class RiepilogoTestComponent{
  
  constructor(public rs: RisposteSelezionateService) {
  } 
 
  
  popupVisible = false;
  alert:boolean=false
  

  svuotaRisposte(){
    this.rs.risposteSelezionate = [];
  }
  
  calcolaPercentualeCorrette(){
    if (this.rs.risposteSelezionate.length !== this.rs.risposteCorrette.length) {
      this.alert = true
      throw new Error("non hai risposto a tutte le domande");
    } else this.popupVisible = true;

    const totali = this.rs.risposteSelezionate.length;
    let corrette = 0;

    for (let i = 0; i < totali; i++) {
      if (this.rs.risposteSelezionate[i] === this.rs.risposteCorrette[i]) {
        corrette++;
      }
    }

    const percentualeCorrette = (corrette / totali) * 100;
    this.rs.percentualeCorrette=percentualeCorrette;
  }

}
