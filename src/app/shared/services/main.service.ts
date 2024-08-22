import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable} from "rxjs";
import { IdesepService } from './idesep.service';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private idesepService = inject(IdesepService);

  private temas:any=["03","04","11"];

  private grupo:any = {
    "03":['02'],
    "04":["06","07"],
    "11":["01","02","03","04","05","06","07","08","09","10"]
  };

  private objeto:any = {
    "03":{
      "02":['001','002','003']
    },
    "04":{
      "06":["001","002","003"],
      "07":["001","002","003"],
    },
    "11":{
      "01":["001"],
      "02":["001"],
      "03":["001"],
      "04":["001"],
      "05":["001"],
      "06":["001"],
      "07":["001"],
      "08":["001"],
      "09":["001"],
      "10":["001"],
    }
  }

  private services:any = {
    "47": "evapotranspiracion-1ra",
    "48": "evapotranspiracion-2da",
    "49": "evapotranspiracion-3ra",
    "76": "indice-humedad-1ra",
    "77": "indice-humedad-2da",
    "78": "indice-humedad-3ra",
  }

  public informacionProducto:any={};

  listar():Observable<any>{
    let json_features:any[]= [];
    let json_features2:any[]= [];
    let json_features3:any[]= [];
    let uniquekeys:any[]= [];
    let uniquekeys2:any[]= [];
    let uniquekeys3:any[]= [];

    return this.idesepService.getServices().pipe(
      map(result =>
      {
        if(typeof result !== 'undefined'){
          result.forEach((item:any) => {
            if(!uniquekeys.some((k:any) => k==item["codtema"])){
              if(this.temas.some((k:any) => k==item["codtema"])){
                uniquekeys.push(item["codtema"]);
              json_features.push({
                "id":item["id"],
                "codtema":item["codtema"],
                "temaNomCorto":item["temaNomCorto"]
             });
              }
            }
          });

          json_features.forEach(group => {
            result.forEach((item:any)=>{
              if(group["codtema"]==item["codtema"]){
                if(!uniquekeys2.some((k:any) => k== `${item["codtema"]-item["codgrupo"]}`)){
                  if(this.grupo[`${item["codtema"]}`].some((k:any) => k==item["codgrupo"])){
                    uniquekeys2.push(`${item["codtema"]}-${item["codgrupo"]}`);
                    json_features2.push({
                      "id":item["id"],
                      "codtema":item["codtema"],
                      "temaNomCorto":item["temaNomCorto"],
                      "codgrupo":item["codgrupo"],
                      "grupoNomCorto":item["grupoNomCorto"],
                    });
                  }
                }
              }
            });
          });

          json_features2.forEach(grupo => {
            result.forEach((item:any) => {
              if(grupo["codtema"]==item["codtema"]){
                if(grupo["codgrupo"]==item["codgrupo"]){
                  if(!uniquekeys3.some((k:any) => k== item["id"])){
                    if(this.objeto[`${item["codtema"]}`][`${item["codgrupo"]}`].some((k:any)=> k == item["codObjeto"])){
                      item["linkWeb"]= typeof this.services[`${item["id"]}`] == 'undefined' ? this.services[`${item["id"]}`] : '';
                      uniquekeys3.push(item["id"]);
                      json_features3.push(item);
                    }
                  }
                }
              }
            });
          });

          const resultado:any = {
            "temas":json_features,
            "grupos" :json_features2,
            "objetos" :json_features3
          }

          //console.log(resultado);
          return resultado;
        }else{
          return [];
        }
      }),catchError(error=>{
        console.log("error en servicio idesep Listar",error)
        return []
      }));
  }

  infoProduct(productos?:any[],service?:string):any[]{
    let resultado:any={};
    console.log(productos);
    if (typeof productos != 'undefined' && typeof service != 'undefined'){
      for (let i = 0; i < productos.length; i++) {
        let url:string = typeof this.services[`${productos[i]["id"]}`] =='undefined' ? this.services[`${productos[i]["id"]}`] :'';
        if(url.indexOf(service) !== -1){
          let lyrArr = productos[i].split(':');
          let esquema = 'db'.concat(lyrArr[0].split('_')[1]);
          let tabla = lyrArr[1].replace("_",".");
          let lugaresAfec = `${esquema}_${lyrArr[1]}`;

          this.informacionProducto["urlWms"]=productos[i]["urlWms"];
          this.informacionProducto["layerWms"]=productos[i]["layerWms"];
          this.informacionProducto["esquema"]=esquema;
          this.informacionProducto["tabla"]=tabla;
          this.informacionProducto["lugaresAfectados"]=lugaresAfec;

          resultado["grupoNomCorto"] = productos[i]["grupoNomCorto"];
          resultado["objetoNombreCorto"] = productos[i]["objetoNombreCorto"];
          resultado["urlWms"] = productos[i]["urlWms"];
          resultado["layerWms"] = productos[i]["layerWms"];
          resultado["esquema"] = esquema;
          resultado["tabla"] = tabla;
          resultado["lugaresAfectados"] = lugaresAfec;
        }
      }
      return resultado;
    }else{
      return [];
    }
  }
}
