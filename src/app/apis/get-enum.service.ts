import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enums } from '../model/enums-model';

@Injectable({
  providedIn: 'root'
})
export class GetEnumService {

  constructor(private http: HttpClient) { }

  url = new URL("http://79.36.171.187:8080/api/v1/getEnums")

  getEnums(){
    return this.http.get<Enums>(this.url.href);
  }

}
