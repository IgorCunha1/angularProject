import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Calcme } from './calcme';

@Injectable({
  providedIn: 'root'
})
export class CalcmeService {

  private baseUrl = "http://localhost:8080/pessoas";
  constructor(private httpClient: HttpClient) { }

  getCalcmeList(): Observable<Calcme[]>{
    return this.httpClient.get<Calcme[]>(`${this.baseUrl}`);
  }

  createCalcme(calcme: Calcme): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, calcme);
  }

}
