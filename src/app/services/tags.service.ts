import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Tag } from '../tag';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  private apiUrl = "https://api.codingninjas.com/api/v3/event_tags";

  constructor(private http: HttpClient) { }
  // getTags(): Observable{
  //   // const apiData = this.http.get(this.apiUrl);
  //   // var aa = JSON.stringify(apiData);
  //   // console.log(aa);
  //   return this.http.get(this.apiUrl);
  // }
}
