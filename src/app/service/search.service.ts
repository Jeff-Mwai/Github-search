import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  getInfo (x) {
  return this.httpClient.get('https://api.github.com/users/'+ x+'/repos?access_token=' + environment.gitApiKey)
  }

  getUsers (x) {
  console.log(x);
  return this.httpClient.get('https://api.github.com/users/'+x+'?access_token=' + environment.gitApiKey)
  }
}
