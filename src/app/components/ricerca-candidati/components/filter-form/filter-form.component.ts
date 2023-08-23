import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FilteredSearchService } from 'src/app/apis/filtered-search.service';
import { GetEnumService } from 'src/app/apis/get-enum.service';
import { Enums } from 'src/app/model/enums-model';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css'],
})
export class FilterFormComponent implements OnInit {
  constructor(
    private filterService: FilteredSearchService,
    private enumService: GetEnumService
  ) {
    this.enumService.getEnums().subscribe((data) => {
      console.log(data);
      this.enums = data;
    });
  }

  @Output() dataReady = new EventEmitter<any>();

  enums: Enums = {
    certificazione: [{ name: ""}],

    laurea: [{ name: ""}],

    contratto: [{ name: ""}],

    diploma: [{ name: ""}],

    esito: [{ name: ""}],
  };

  ngOnInit(): void {
    this.filterForm = new FormGroup({
      nome: new FormControl(null),
      residenza: new FormControl(null),
      laurea: new FormControl(null),
      diploma: new FormControl(null),
      certificazione: new FormControl(null),
      contratto: new FormControl(null),
      ral: new FormControl(null),
      tariffaGiornalieraNetta: new FormControl(null),
      esitoTest: new FormControl(null),
    });
  }

  filterForm!: FormGroup;

  onSubmit() {
    //   const params = new URLSearchParams();
    //   const formValues = this.filterForm.value;
    //   for (const key in formValues) {
    //     if (formValues[key]) {
    //       params.set(key, formValues[key]);
    //       this.filterService.getFiltered(params).subscribe(value => {console.log(value)
    //       this.dataReady.emit(value)})
    //     }
    //   }

    let params = new HttpParams();
    const formValues = this.filterForm.value;
    for (const key in formValues) {
      if (formValues[key]) {
        params = params.set(key, formValues[key]);
        this.filterService.getFiltered(params).subscribe((value) => {
          console.log(value);
          this.dataReady.emit(value);
        });
      }
    }
  }
}
