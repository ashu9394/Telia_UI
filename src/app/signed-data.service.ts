import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {SignedRecords} from './signed-records';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/throw';

@Injectable({
  providedIn: 'root'
})
export class SignedDataService {
  
  constructor(private http: Http) { }
  API_URL = "localhost:8000/data";
  public getSignedDocumentsDetails() : Observable<SignedRecords[]>{
    return this.http.get(`${this.API_URL}`).pipe(map(response => {
      const signedDocuments =  response.json();
      return signedDocuments.map((record) => {
        new SignedRecords(record)
      })
    }))
  }
}
