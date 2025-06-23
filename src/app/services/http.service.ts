import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }
  sendRequest(data: any) {
    return this.http.post('https://testologia.site/intensive-price', data)
  }
  getData(category: any) {
    return this.http.get('https://testologia.site/intensive-data', {params: {category: category}});
  }
}
