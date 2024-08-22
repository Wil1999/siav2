import { AfterViewInit, Component, ElementRef, inject, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { LayersOpenMap } from '../../constants/layers.const';
import { NgOptimizedImage } from '@angular/common';
declare var L:any;

export const LAT=-9.1951786;
export const LON=-74.9904165;

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [ModalComponent,NgOptimizedImage],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})

export class MapComponent implements AfterViewInit, OnInit,OnDestroy{
  @Input() lat: number = LAT;
  @Input() lon: number = LON;
  private map:any;
  private wheelEventListener:any;
  private mapLayerMonitero:any;

  @ViewChild('map') mapElementRef: ElementRef = null!;

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    window.removeEventListener('wheel', this.wheelEventListener);
  }

  ngAfterViewInit(): void {
    this.initMap();
    window.addEventListener('wheel',this.wheelEventListener,{passive:false});
  }

  private initMap():void{
    this.FilterZona();

    // Iniciar Mapa
    this.map = new L.Map(this.mapElementRef.nativeElement,{
      scrollWheelZoom:false,
      center: [this.lat,this.lon],
      zoom: 6,
      zoomControl:false,
      layers:[LayersOpenMap.TypeMap.Streets,this.mapLayerMonitero,LayersOpenMap.FilterRegion.Departamento]
    });
    this.mapLayerMonitero.getLayer('04_06_001_03_001_531_0000_00_00').addTo(this.map);

    //Variable Grupo de Capas
    var grupoCapas = {
      'Capas': {
              'Cartografía Temática': this.mapLayerMonitero
          },
          'Zonas': {
              'Departamentos': LayersOpenMap.FilterRegion.Departamento,
              'Provincias': LayersOpenMap.FilterRegion.Provincia,
              'Distritos': LayersOpenMap.FilterRegion.Distrito
          }
    };
    var opciones_grupo_capas={
      exclusiveGroups: ['Zonas', 'Reservorios'],
      position: 'topleft'
    };
    L.control.groupedLayers(LayersOpenMap.TypeMap, grupoCapas, opciones_grupo_capas).addTo(this.map);


    var zoomHome = L.Control.zoomHome({
      position:'topleft',
      zoomHomeTitle:'Centrar Mapa'
    });

    //this.map.addControl(layerControl);
    zoomHome.addTo(this.map);

    //Funcion especial CTRL + Rueda
    this.wheelEventListener=(event: WheelEvent) => {
      if (event.ctrlKey === true) {
        console.log("ctrl+wheel")
        event.preventDefault();
        event.stopPropagation();
        const delta = event.deltaY < 0 ? 1 : -1;
        const newZoomLevel = this.map.getZoom() + delta;
        this.map.setZoom(newZoomLevel);
      }
    };
  }

  //Funcion Filtro x Zona
  private FilterZona(filter="1=1"){
    this.mapLayerMonitero = new this.mySource('https://idesep.senamhi.gob.pe/geoserver/g_04_06/wms?',{
            cql_filter: filter,
            //cql_filter: "rango IN ('> 70', '60 - 70')",
            transparent: true,
            format: 'image/png',
            info_format: 'application/json',
            tiled: 'true',
            detectRetina: true,
            opacity: 0.9
    });
  }

  // variable mySource - Custom Layer
  private mySource = L.WMS.Source.extend({
    onAdd: function () {
        this.refreshOverlay()
    },
    onRemove: function () {
        var subLayers = Object.keys(this._subLayers).join(",");
        if (!this._map) {
            return
        }
        if (subLayers) {
            this._overlay.remove();
        }
    },
    getEvents: function () {
        if (this.options.identify) {
            return {
                click: this.identify
            }
        } else {
            return {}
        }
    },
    getFeatureInfo: function (point:any, latlng:any, layers:any, callback:any) {
        var params = this.getFeatureInfoParams(point, layers),
        url = this._url + L.Util.getParamString(params, this._url);
    }
  });

  // Function SetCQL
  private setCql(filter:any){
    if (this.map.hasLayer(this.mapLayerMonitero)) {
        this.map.removeLayer(this.mapLayerMonitero);
    }
    this.FilterZona(filter);
    this.mapLayerMonitero.getLayer('04_06_001_03_001_531_0000_00_00').addTo(this.map);
  }

}
