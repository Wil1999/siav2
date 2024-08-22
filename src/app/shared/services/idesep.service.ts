import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IdesepService {

  private urlApi = 'https://idesep.senamhi.gob.pe/servicios/list';

  constructor(private http: HttpClient) {
  }

  getServices(): Observable<any> {
    return this.http.get(this.urlApi, {});
  }
}
