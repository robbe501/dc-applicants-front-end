import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Anagrafica } from '../interfaces/anagrafica';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
  
  formAnagrafica!: FormGroup

  checked!:boolean;

  constructor(private router: Router, private formService:FormService) { }

  ngOnInit(): void {

    this.formAnagrafica= new FormGroup({

      codice_fiscale:new FormControl(null),
      nome:new FormControl(null),
      cognome:new FormControl(null),
      email:new FormControl(null),
      data_nascita:new FormControl(null),
      luogo_nascita:new FormControl(null),
      cittadinanza:new FormControl(null),
      residenza:new FormControl(null),
      cap_residenza:new FormControl(null),
      domicilio:new FormControl(null),
      cap_domicilio:new FormControl(null),
      recapito_mobile:new FormControl(null),
      come_conosciuto:new FormControl(null),
      categoria_protetta:new FormControl(null),
      condanne_civili:new FormControl(null)

    })


  }

  isTrueorFalse(event:any){
    this.checked=event.checked
    console.log(this.checked);

  }

  formValues!: Anagrafica

  onSubmit(){
    this.formValues = this.formAnagrafica.value;
    /* console.log(this.formValues); */

    if(this.checked){
      this.formValues.domicilio=this.formValues.residenza,
      this.formValues.cap_domicilio=this.formValues.cap_residenza

    }

    this.formService.addAnagrafica(this.formValues)

    this.formService.logCandidato()

    this.router.navigate(['/modulo/form2'])
  }

}
