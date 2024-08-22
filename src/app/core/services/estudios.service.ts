import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {

  private urlApi = 'https://www.senamhi.gob.pe/include/_estudios-e-investigaciones.php';

  constructor(private http: HttpClient) {
  }

  getEstudios(): Observable<any> {
    return this.http.post(this.urlApi, {});
  }
}
