import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiHTTPService {
  private url = "http://localhost:3000/"
  constructor(private httpClient: HttpClient) { }

  get<Response>(path: string){
    const response = this.httpClient.get<Response>(`${this.url}${path}`)
    return response
  }
  post<RequestBody,Response>(path: string, requestBody: RequestBody){
    const response = this.httpClient.post<Response>(`${this.url}${path}`, requestBody)
    return response
  }
  put<RequestBody,Response>(path: string, requestBody: RequestBody){
    const response = this.httpClient.put<Response>(`${this.url}${path}`, requestBody)
    return response
  }
  delete<Response>(path: string){
    const response = this.httpClient.get<Response>(`${this.url}${path}`)
    return response
  }
}
