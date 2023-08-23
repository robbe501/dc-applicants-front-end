import { Component, Input } from '@angular/core';
import { Candidato } from 'src/app/model/candidato-model';

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.css']
})
export class FilterTableComponent {

  @Input() candidati!: Candidato[];

}
