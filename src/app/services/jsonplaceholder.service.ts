import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JSONPlaceholderService {

  constructor(private http: HttpClient) { }


  postData(formObject: any):Observable<any> {
    
    const url = "https://jsonplaceholder.typicode.com/users"
    return this.http.post<any>(url, formObject)
  }
  
  getData():Observable<any> {

    const url = "https://jsonplaceholder.typicode.com/users"
    return this.http.get<any>(url)
  }
  
  deleteData(id: any):Observable<any> {
    const url = "https://jsonplaceholder.typicode.com/users/" + id
    return this.http.delete<any>(url)
  }

  updateData(formObject: any):Observable<any> {
    const url = "https://jsonplaceholder.typicode.com/users"
    return this.http.put<any>(url, formObject)
  }
}