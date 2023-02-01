import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }

// take a variable to keep api//
apiurl="https://api.npoint.io/d8974e2a83b76da4e84d";

//  Create a method apiurl name ka and take Observabletype data any whose is the library of rajs//
homeapi():Observable<any>{
  return this.http.get(`${this.apiurl}`);

}











}
