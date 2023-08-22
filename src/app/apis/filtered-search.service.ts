import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilteredSearchService {
  constructor(private http: HttpClient) {}

  url = new URL("http://79.36.171.187:8080/api/v1")

  getFiltered(searchParams: URLSearchParams) : Observable<Candidato[]>{
    return this.http.get<Candidato[]>(this.url.search = searchParams.toString());
  }
}