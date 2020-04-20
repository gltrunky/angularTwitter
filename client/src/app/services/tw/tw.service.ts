import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Tw } from '../../models/tw';

@Injectable({
  providedIn: 'root'
})
export class TwService {

  constructor(
    private http: HttpClient
  ) { }

  /** Version Node */
  private url = 'http://127.0.0.1:3000';

  getTws(): Observable<Tw[]> {
    return this.http.get<Tw[]>(this.url+"/tw");
  }

  /** Version PHP */
  /*private url = 'http://127.0.0.1/tw/api-php';

  getTws(): Observable<Tw[]> {
    return this.http.get<Tw[]>(this.url+"/tw.php");
  }*/
}
