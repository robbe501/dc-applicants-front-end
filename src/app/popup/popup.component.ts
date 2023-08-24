import { Component } from '@angular/core';
import { RisposteSelezionateService } from '../risposte-selezionate.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
   percentualeCorrette:number=0;
  constructor(public rs: RisposteSelezionateService) {
    this.rs.percentualeCorrette=this.percentualeCorrette
  } 
 
}
