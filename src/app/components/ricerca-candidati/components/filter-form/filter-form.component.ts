import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FilteredSearchService } from 'src/app/apis/filtered-search.service';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent implements OnInit {

  constructor(private filterService: FilteredSearchService){}

  ngOnInit(): void {
    this.filterForm = new FormGroup({
      nominativo: new FormControl(null),
      residenza: new FormControl(null),
      laurea: new FormControl(null),
      diploma: new FormControl(null),
      certificazione: new FormControl(null),
      tipologiaContratto: new FormControl(null),
      tariffa: new FormControl(null),
      ral: new FormControl(null),
      esitoTest: new FormControl(null)
    })
  }
  filterForm!: FormGroup

  

  onSubmit() {
    const params = new URLSearchParams();
    const formValues = this.filterForm.value;
    for (const key in formValues) {
      if (formValues[key]) {
        params.set(key, formValues[key]);
        this.filterService.getFiltered(params)
      }
    }
  }


  // onSubmit() {
    
  //   const formValues = this.filterForm.value;
  //   let queryString = '';
  //   for (const key in formValues) {
  //     if (formValues[key]) {
  //       queryString += `${key}=${formValues[key]}&`;
  //     }
  //   }
  //   queryString = queryString.slice(0, -1);
  //   const url = `https://example.com/search?${queryString}`;

  //   console.log(url);
  // }
    
}
