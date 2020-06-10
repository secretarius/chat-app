import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  private REST_API_SERVER = "https://api.chucknorris.io/jokes/random";

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('assets/users.json');
  }

  getValue() {
    return this.http.get(this.REST_API_SERVER);
  }
}
