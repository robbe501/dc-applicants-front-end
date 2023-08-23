import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidato } from '../model/candidato-model';



@Injectable({
  providedIn: 'root'
})
export class FilteredSearchService {
  
  constructor(private http: HttpClient) {}

  url = new URL("http://79.36.171.187:8080/api/v1/getFiltered")

  getFiltered(searchParams: HttpParams) : Observable<Candidato[]>{
    this.url.search = searchParams.toString()
    return this.http.get<Candidato[]>(this.url.href);
  }
}