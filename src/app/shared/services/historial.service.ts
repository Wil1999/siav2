import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  constructor(private http: HttpClient) {
  }

  getAnio(esquema:any,tabla:any): Observable<any> {
    let url = `http://sia.senamhi.gob.pe:8080/sia/producto/anio/${esquema}/${tabla}`;
    return this.http.get(url,{});
  }

  getMes(esquema:any,tabla:any,anio:any): Observable<any> {
    let url = `http://sia.senamhi.gob.pe:8080/sia/producto/mes/${esquema}/${tabla}/${anio}`;
    return this.http.get(url,{});
  }

  getHistorial(esquema:any,tabla:any,anio:any,mes:any): Observable<any> {
    let url = `http://sia.senamhi.gob.pe:8080/sia/producto/historial/${esquema}/${tabla}/${anio}/${mes}`;
    return this.http.get(url,{});
  }
}
