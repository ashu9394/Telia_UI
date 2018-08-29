import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {SignedRecords} from './signed-records';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignedDataService {
  
  constructor(private http: Http) { }
  
  API_URL = "http://localhost:8000/data";
  public getSignedDocumentsDetails() : Observable<SignedRecords[]>{
    return this.http.get(`${this.API_URL}`).pipe(map(response => {
      return response.json()
    }))
  }
}
