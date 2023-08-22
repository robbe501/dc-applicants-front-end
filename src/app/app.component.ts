import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  title = 'dc-applicants';
  
   array:string[]=[];
  
  RisposteTest(newArray:string[]){
    this.array.push(...newArray)
    console.log(this.array)
  }

}
