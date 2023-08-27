import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from 'src/app/services/form.service';
import { Esperienza } from '../interfaces/esperienza';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit {

  formEsperienza!: FormGroup

  constructor(private formService:FormService, private router:Router){}

  ngOnInit(): void {

    this.formEsperienza=new FormGroup({
      azienda:new FormControl(null),
      data_inizio:new FormControl(null),
      qualifica:new FormControl(null),
      contratto:new FormControl(null),
      specifica_contratto:new FormControl(null),
      livello:new FormControl(null),
      ral:new FormControl(null),
      tariffa_giornaliera_netta:new FormControl(null),
      nome_referente:new FormControl(null),
      normativa_privacy:new FormControl(null)
    })

  }

  formValues!: Esperienza

  onSubmit(){

    this.formValues = this.formEsperienza.value

    this.formService.addEsperienza(this.formValues)

    this.formService.logCandidato()

    this.router.navigate([''])

  }


}
