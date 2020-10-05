import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  getInfo () {
  return this.httpClient.get('https://api.github.com/users/Jeff-Mwai/repos')
  }

  getUsers () {
  return this.httpClient.get('https://api.github.com/users/Jeff-Mwai')
  }
}
