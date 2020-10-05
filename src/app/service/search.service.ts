import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

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
  searchUsers () {
  return this.httpClient.get('')
  }
}
