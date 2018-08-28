import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ENGINE_METHOD_DIGESTS } from 'constants';

@Injectable({
  providedIn: 'root'
})
export class SignedDataService {
  API_URL = "";
  constructor(private httpClient: HttpClient) { }

  getSignedDocumentsDetails(){
    return this.httpClient.get(`${this.API_URL}`)
  }
}
