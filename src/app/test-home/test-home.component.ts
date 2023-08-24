import { Component } from '@angular/core';
import { RisposteSelezionateService } from '../risposte-selezionate.service';

@Component({
  selector: 'app-test-home',
  templateUrl: './test-home.component.html',
  styleUrls: ['./test-home.component.css']
})
export class TestHomeComponent {

constructor(private rs:RisposteSelezionateService){
  
}
scegliTest0(){
  this.rs.test = 0
}
scegliTest1(){
  this.rs.test = 1
}
scegliTest2(){
  this.rs.test = 2
}
}
