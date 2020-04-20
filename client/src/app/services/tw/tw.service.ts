import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Tw } from '../../models/tw';

@Injectable({
  providedIn: 'root'
})
export class TwService {

  private url = 'http://127.0.0.1:3000';

  constructor(
    private http: HttpClient
  ) { }

  getTws(): Observable<Tw[]> {
    return this.http.get<Tw[]>(this.url+"/tw");
  }
}
