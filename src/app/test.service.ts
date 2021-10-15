import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor( public hc:HttpClient) { }


  getData():Observable<any[]>
  {
   return this.hc.get<any[]>("https://jsonplaceholder.typicode.com/comments")
  }
}
