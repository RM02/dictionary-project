import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  
  url:string = 'http://eratosthenes.pythonanywhere.com/definition'

  constructor(private http: HttpClient) { }
  
  headers: HttpHeaders = new HttpHeaders({
  	"Content-Type": "application/json"
  })

  getWord(value:string) {
  	return this.http.get(this.url, {
  		params: { word: value }
  	})
  }
}
