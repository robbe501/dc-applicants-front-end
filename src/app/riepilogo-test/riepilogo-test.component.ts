import { Component, OnInit } from '@angular/core';
import { RisposteSelezionateService } from '../risposte-selezionate.service';

@Component({
  selector: 'app-riepilogo-test',
  templateUrl: './riepilogo-test.component.html',
  styleUrls: ['./riepilogo-test.component.css']
})
export class RiepilogoTestComponent implements OnInit {
  
  constructor(public rs: RisposteSelezionateService) {} 

  ngOnInit(): void {
    
  }

  svuotaRisposte(){
    this.rs.risposteSelezionate = [];
  }
}
