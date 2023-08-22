import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilteredSearchService {
  constructor(private http: HttpClient) {}

  getFiltered(url : string){
    this.http.get(url)
  }
}