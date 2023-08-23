import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RisposteSelezionateService {

  risposteSelezionate:string[]=[]
  constructor() { 
    setInterval(()=>console.log(this.risposteSelezionate), 4000)
    
  }
}
