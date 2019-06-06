import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class PreferencesService {
 

  constructor(private _http: HttpClient) {}


  register(userData) {

    // this.headers = new Headers();
    // this.headers.append("Content-Type", 'application/json');   
   
    return this._http.post<any>('http://mydomain.azurewebsites.net/api/products',userData)
    .map(res => res.json().data);
    //return this._http.post<any>(this._url, userData);
  }
}
