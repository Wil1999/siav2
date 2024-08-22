import { AfterViewInit, Component, ElementRef, inject, Input, OnInit, ViewChild } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { Config } from 'datatables.net';
import { MainService } from '../../services/main.service';
import { HistorialServiceImpl } from '../../services/historialImpl.service';
import { BehaviorSubject, firstValueFrom, map, Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [DataTablesModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit,AfterViewInit {
  @Input() servicios!:string;

  private mainService = inject(MainService);
  private historialServiceImpl = inject(HistorialServiceImpl);

  private json_data:any[]=[];
  private json_data_stringfy!:any;
  //
  private menu:any;
  private info!:any[];
  private result_lista={};
  //
  private producto_esquema:any;
  private product_tabla:any;
  private anio_d !:any;
  private mes_d !:any;
  //
  //private mes_d = this.historialService.getMesProduct(this.producto_esquema,this.product_tabla,this.getMax(this.anio_d));

  dtOptions:Config={};

  async ngOnInit() {

    this.menu = await firstValueFrom(this.mainService.listar());
    this.info = this.mainService.infoProduct(this.menu["objeto"],this.servicios);

    // this.mainService.listar().subscribe({
    //   next: (menu)=>{
    //     this.menu = menu
    //     this.mainService.infoProduct(this.menu["objeto"],this.servicios).subscribe({
    //       next: (info)=>{
    //         //
    //         console.log("aquiiiiii",info);
    //         this.producto_esquema = info["esquema"];
    //         this.product_tabla = info["tabla"];

    //         this.historialServiceImpl.getAnioProduct(this.producto_esquema, this.product_tabla).subscribe({
    //           next: (val) =>{
    //             this.anio_d=this.getMax(val);
    //             this.historialServiceImpl.getMesProduct(this.producto_esquema,this.product_tabla,this.anio_d).subscribe({
    //               next: (val) =>{
    //                 this.mes_d = this.getMax(val);
    //                 //
    //                 this.loadTable();
    //                 //
    //               },
    //               error: (e) => console.log("error en historial getMesProducto",e)
    //             });
    //           },
    //           error: (e) => console.log("error en historial getAnioProduct",e)
    //         });

    //         //
    //       }
    //     });
    //   }
    // });

  }

  ngAfterViewInit(): void {

  }

  //
  getMax(array:[]):any{
    if(array.length >0){
      let n_array:number[] = array.map(Number);
      return Math.max(...n_array);
    }else{
      return '';
    }
  }

  loadTable(){
    this.historialServiceImpl.getHistorial(this.producto_esquema,this.product_tabla,this.anio_d,this.mes_d).subscribe({
      next: (val)=>{
        if(typeof val["leyenda"] != 'undefined'){

          let result = val["leyenda"];
          let data:any = {};

          result.forEach((nivel:any) => {

            if(nivel["descripcion"].toLowerCase().includes('> 70')){
              data["descripcion"] = nivel["descripcion"];
              data["area"] = nivel["area"];
              data["perimetro"] = nivel["perimetro"];
              data["periodo"] = nivel["periodo"];
              this.json_data.push(data);
            }

            if(nivel["descripcion"].toLowerCase().includes('60 - 70')){
              data["descripcion"] = nivel["descripcion"];
              data["area"] = nivel["area"];
              data["perimetro"] = nivel["perimetro"];
              data["periodo"] = nivel["periodo"];
              this.json_data.push(data);
            }

            if(nivel["descripcion"].toLowerCase().includes('50 - 60')){
              data["descripcion"] = nivel["descripcion"];
              data["area"] = nivel["area"];
              data["perimetro"] = nivel["perimetro"];
              data["periodo"] = nivel["periodo"];
              this.json_data.push(data);
            }

            if(nivel["descripcion"].toLowerCase().includes('40 - 50')){
              data["descripcion"] = nivel["descripcion"];
              data["area"] = nivel["area"];
              data["perimetro"] = nivel["perimetro"];
              data["periodo"] = nivel["periodo"];
              this.json_data.push(data);
            }

            if(nivel["descripcion"].toLowerCase().includes('40 - 45')){
              data["descripcion"] = nivel["descripcion"];
              data["area"] = nivel["area"];
              data["perimetro"] = nivel["perimetro"];
              data["periodo"] = nivel["periodo"];
              this.json_data.push(data);
            }

            if(nivel["descripcion"].toLowerCase().includes('35 - 40')){
              data["descripcion"] = nivel["descripcion"];
              data["area"] = nivel["area"];
              data["perimetro"] = nivel["perimetro"];
              data["periodo"] = nivel["periodo"];
              this.json_data.push(data);
            }

            if(nivel["descripcion"].toLowerCase().includes('25 - 30')){
              data["descripcion"] = nivel["descripcion"];
              data["area"] = nivel["area"];
              data["perimetro"] = nivel["perimetro"];
              data["periodo"] = nivel["periodo"];
              this.json_data.push(data);
            }

            if(nivel["descripcion"].toLowerCase().includes('20 - 25')){
              data["descripcion"] = nivel["descripcion"];
              data["area"] = nivel["area"];
              data["perimetro"] = nivel["perimetro"];
              data["periodo"] = nivel["periodo"];
              this.json_data.push(data);
            }

            if(nivel["descripcion"].toLowerCase().includes('15 - 20')){
              data["descripcion"] = nivel["descripcion"];
              data["area"] = nivel["area"];
              data["perimetro"] = nivel["perimetro"];
              data["periodo"] = nivel["periodo"];
              this.json_data.push(data);
            }

            if(nivel["descripcion"].toLowerCase().includes('10 - 15')){
              data["descripcion"] = nivel["descripcion"];
              data["area"] = nivel["area"];
              data["perimetro"] = nivel["perimetro"];
              data["periodo"] = nivel["periodo"];
              this.json_data.push(data);
            }

            if(nivel["descripcion"].toLowerCase().includes('5 - 10')){
              data["descripcion"] = nivel["descripcion"];
              data["area"] = nivel["area"];
              data["perimetro"] = nivel["perimetro"];
              data["periodo"] = nivel["periodo"];
              this.json_data.push(data);
            }

            if(nivel["descripcion"].toLowerCase().includes('0 - 5')){
              data["descripcion"] = nivel["descripcion"];
              data["area"] = nivel["area"];
              data["perimetro"] = nivel["perimetro"];
              data["periodo"] = nivel["periodo"];
              this.json_data.push(data);
            }
          });
        }
        this.json_data_stringfy = JSON.stringify(this.json_data);
        //
        this.dtOptions = {
          ajax: this.json_data_stringfy,
          searching: false,
          language:{
            infoEmpty:'Mostrando 0 a 0 de 0 entradas',
            emptyTable:'No hay datos disponibles.',
            infoFiltered:'(Filtrado de _MAX_ total entradas)',
            lengthMenu:'Mostrar _MENU_ entradas',
            loadingRecords:'Cargando...',
            search:'Buscar: ',
            paginate: {
              first:"Primero",
              last:"Último",
              next:"Siguiente",
              previous:"Anterior"
            }
          },
          columns: [{
            data: 'descripcion'
          }, {
            data: 'area'
          }, {
            data: 'perimetro'
          },{
            data: 'periodo'
          }
        ]
        };
        //
      },
      error: (er) =>{
        let data:any={};
        data["descripcion"] = "";
        data["area"] = "";
        data["perimetro"] = "";
        data["periodo"] = "";
        this.json_data.push(data);
        console.log("Error en LoadTable",er)
      }
    });
  }

}
