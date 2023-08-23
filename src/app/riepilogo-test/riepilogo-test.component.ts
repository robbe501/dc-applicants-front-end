import { Component } from '@angular/core';
import { RisposteSelezionateService } from '../risposte-selezionate.service';

@Component({
  selector: 'app-riepilogo-test',
  templateUrl: './riepilogo-test.component.html',
  styleUrls: ['./riepilogo-test.component.css']
})
export class RiepilogoTestComponent {
  constructor(private rs: RisposteSelezionateService){}
  svuotaRisposte(){
    this.rs.risposteSelezionate = []

  }
}
