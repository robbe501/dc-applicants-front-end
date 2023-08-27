import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from 'src/app/services/form.service';
import { Titoli } from '../interfaces/titoli';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  formTitoli!: FormGroup

  constructor(private router: Router, private formService:FormService){}


  ngOnInit(): void {

    this.formTitoli= new FormGroup({

      laurea:new FormControl(null),
      anno_laurea:new FormControl(null),
      laurea_in_corso:new FormControl(null),
      diploma:new FormControl(null),
      data_diploma:new FormControl(null),
      certificazione:new FormControl(null),
      data_scadenza:new FormControl(null)
    })

  }

  formValues!: Titoli

  onSubmit(){

    this.formValues = this.formTitoli.value;

    /* console.log(this.formValues); */


    this.formService.addTitoli(this.formValues);

    this.formService.logCandidato();

    this.router.navigate(['/modulo/form3']);


  }



}
