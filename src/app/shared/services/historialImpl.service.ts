
import {inject, Injectable} from '@angular/core';
import { HistorialService } from './historial.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistorialServiceImpl {
  private historialService = inject(HistorialService);

  getAnioProduct(esquema:any,tabla:any):Observable<any>{
    return this.historialService.getAnio(esquema, tabla);
  }

  getMesProduct(esquema:any,tabla:any,anio:any):Observable<any>{
    return this.historialService.getMes(esquema,tabla,anio);
  }

  getHistorial(esquema:any,tabla:any,anio:any,mes:any):Observable<any>{
    return this.historialService.getHistorial(esquema,tabla,anio,mes);
  }
}
