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
  // private urlNode = 'http://127.0.0.1:3000';

  // getTws(): Observable<Tw[]> {
  //   return this.http.get<Tw[]>(this.urlNode+"/tw");
  // }

  // saveTw(tw: Tw): Observable<Tw> {
  //   return this.http.post<Tw>(this.urlNode+"/tw", tw);
  // }

  /** Version PHP */
  private urlPHP = 'http://correctionangular/api-php/';

  getPHPTws(): Observable<Tw[]> {
    return this.http.get<Tw[]>(this.urlPHP+"/tw.php");
  }

  postPHPTw(tw: Tw): Observable<Tw> {
    const formData = new FormData();
    formData.append('message', tw.message);
    formData.append('id_user', ""+tw.id_user);
    return this.http.post<Tw>(this.urlPHP+"/tw_insert.php", formData)
  }

  deleteTw(tw: Tw): Observable<Tw> {
    return this.http.delete<Tw>(this.urlPHP+"/tw/" + tw.id);
  }
}
