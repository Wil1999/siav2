import { ISubMenuContenido } from './../../models/subemenu-contenido.interface';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule, Location } from '@angular/common';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from "../../../core/components/header/header.component";
import { SUBMENU_CONTENIDO } from '../../constants/submenu_contenido';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menunav',
  standalone: true,
  imports: [CommonModule, HeaderComponent,RouterModule,RouterOutlet],
  templateUrl: './menunav.component.html',
  styleUrl: './menunav.component.css',
  animations: [
    trigger('openClose',[
      state('stay',style({
        left:'0'
      })),
      state('open',style({
        left:'0'
      })),
      state('closed',style({
        left:'-14rem'
      })),
      transition('open=>closed', animate('700ms 100ms ease')),
      transition('closed=>open', animate('700ms 100ms ease')),
      transition('stay=>closed', animate('700ms 100ms ease')),
    ]),
    trigger('showSubMenu',[
      state('stay',style({
        left:'17rem',
        zIndex:'30'
      })),
      state('open',style({
        left:'17rem',
        zIndex:'30'
      })),
      state('closed',style({
        left:'-18rem',
        zIndex:'20'
      })),
      transition('open=>closed', animate('600ms ease-in-out')),
      transition('closed=>open', animate('600ms ease-in-out')),
      transition('stay=>closed', animate('600ms ease-in-out')),
    ]),
    trigger('contain',[
      state('stay',style({
        left:'18rem',
      })),
      state('moved',style({
        left:'18rem',
      })),
      state('nomoved',style({
        left:'4rem',
      })),
      transition('moved=>nomoved', animate('700ms 100ms ease')),
      transition('nomoved=>moved', animate('700ms 100ms ease')),
      transition('stay=>nomoved', animate('700ms 100ms ease'))
    ])
  ]
})
export class MenunavComponent implements OnInit{
  constructor(private location:Location,private router:Router){}

  menuData!:ISubMenuContenido;

  title!: String;
  subtitle!: String;

  showMenuA = 'closed';
  showMenuM = 'closed';
  showMenuPro = 'closed';
  showMenuPGA = 'closed';
  showMenuOtros = 'closed';

  showContent = 'nomoved';

  ngOnInit(): void {
      const path = this.location.path();
//      console.log(path);
      if(path=="/v2/monitoreo/evapotranspiracion"){
        this.menuData = SUBMENU_CONTENIDO[0];
        this.title=this.menuData.titulo;
        this.subtitle=this.menuData.subtitle;
      }
      if(path=="/v2/monitoreo/indice-humedad"){
        this.menuData = SUBMENU_CONTENIDO[1];
        this.title=this.menuData.titulo;
        this.subtitle=this.menuData.subtitle;
      }
      if(path=="/v2/monitoreo/monitoreo-fenologico"){
        this.menuData = SUBMENU_CONTENIDO[2];
        this.title=this.menuData.titulo;
        this.subtitle=this.menuData.subtitle;
      }
      if(path=="/v2/monitoreo/monitoreo-temperatura"){
        this.menuData = SUBMENU_CONTENIDO[3];
        this.title=this.menuData.titulo;
        this.subtitle=this.menuData.subtitle;
      }
      if(path=="/v2/pronostico/radiacion-uv"){
        this.menuData = SUBMENU_CONTENIDO[6];
        this.title=this.menuData.titulo;
        this.subtitle=this.menuData.subtitle;
      }
      if(path=="/v2/pronostico/pronostico-climatico"){
        this.menuData = SUBMENU_CONTENIDO[4];
        this.title=this.menuData.titulo;
        this.subtitle=this.menuData.subtitle;
      }
      if(path=="/v2/pronostico/riesgo-cultivo"){
        this.menuData = SUBMENU_CONTENIDO[5];
        this.title=this.menuData.titulo;
        this.subtitle=this.menuData.subtitle;
      }
      if(path=="/v2/pga/datos-hidrometereologicos"){
        this.menuData = SUBMENU_CONTENIDO[8];
        this.title=this.menuData.titulo;
        this.subtitle=this.menuData.subtitle;
      }
      if(path=="/v2/pga/satelite-goes"){
        this.menuData = SUBMENU_CONTENIDO[9];
        this.title=this.menuData.titulo;
        this.subtitle=this.menuData.subtitle;
      }
      if(path=="/v2/otros/estudios"){
        this.menuData = SUBMENU_CONTENIDO[10];
        this.title=this.menuData.titulo;
        this.subtitle=this.menuData.subtitle;
      }
      if(path=="/v2/otros/acerca-de"){
        this.menuData = SUBMENU_CONTENIDO[11];
        this.title=this.menuData.titulo;
        this.subtitle=this.menuData.subtitle;
      }
  }

  returnToInicio(){
    this.router.navigate(['/inicio']);
  }

  toggleSidebar(typeMenu:string){
    if(typeMenu=="MENU_P"){
      this.showMenuA = 'open';
      this.showContent = 'moved';
      if(this.showMenuM == 'open' || this.showMenuM == 'stay'){
        this.showMenuM = 'closed';
      }
      if(this.showMenuPGA == 'open' || this.showMenuPGA == 'stay'){
        this.showMenuPGA = 'closed';
      }
      if(this.showMenuPro == 'open' || this.showMenuPro == 'stay'){
        this.showMenuPro = 'closed';
      }
      if(this.showMenuOtros == 'open' || this.showMenuOtros == 'stay'){
        this.showMenuOtros = 'closed';
      }
    }
    if(typeMenu=="MENU_M"){
      this.showMenuM = 'open'
      if(this.showMenuPro == 'stay'){
        this.showMenuPro = 'closed';
      }
      if(this.showMenuPGA == 'stay'){
        this.showMenuPGA = 'closed';
      }
      if(this.showMenuOtros == 'stay'){
        this.showMenuOtros = 'closed';
      }
    }
    if(typeMenu=="MENU_PRO"){
      this.showMenuPro = 'open';
      if(this.showMenuM == 'stay'){
        this.showMenuM = 'closed';
      }
      if(this.showMenuPGA == 'stay'){
        this.showMenuPGA = 'closed';
      }
      if(this.showMenuOtros == 'stay'){
        this.showMenuOtros = 'closed';
      }
    }
    if(typeMenu=="MENU_PGA"){
      this.showMenuPGA = 'open';
      if(this.showMenuM == 'stay'){
        this.showMenuM = 'closed';
      }
      if(this.showMenuPro == 'stay'){
        this.showMenuPro = 'closed';
      }
      if(this.showMenuOtros == 'stay'){
        this.showMenuOtros = 'closed';
      }
    }
    if(typeMenu=="MENU_O"){
      this.showMenuOtros = 'open';
      if(this.showMenuM == 'stay'){
        this.showMenuM = 'closed';
      }
      if(this.showMenuPro == 'stay'){
        this.showMenuPro = 'closed';
      }
      if(this.showMenuPGA == 'stay'){
        this.showMenuPGA = 'closed';
      }
    }
  }

  hideSidebar(typeMenu:string) {
    if(typeMenu=="MENU_P"){
        this.showContent = 'nomoved';
        this.showMenuA = 'closed';
    }
    if(typeMenu=="MENU_M"){
        this.showMenuM = 'closed';
    }
    if(typeMenu=="MENU_PRO"){
        this.showMenuPro = 'closed';
    }
    if(typeMenu=="MENU_PGA"){
        this.showMenuPGA = 'closed';
    }
    if(typeMenu=="MENU_O"){
        this.showMenuOtros = 'closed';
    }
  }

  staySidebar(typeMenu:string){
    this.showMenuA = 'stay';
    this.showContent = 'stay';
    if(typeMenu == "MENU_M"){
      this.showMenuM = 'stay';
    }
    if(typeMenu == "MENU_PRO"){
      this.showMenuPro = 'stay';
    }
    if(typeMenu == "MENU_PGA"){
      this.showMenuPGA = 'stay';
    }
    if(typeMenu == "MENU_O"){
      this.showMenuOtros = 'stay';
    }
  }

  hideAll(){
    if(this.showMenuA == 'stay'){
      this.showMenuA = 'closed';
      this.showContent = 'nomoved';
    }
    if(this.showMenuM == 'stay'){
      this.showMenuM = 'closed';
    }
    if(this.showMenuPro == 'stay'){
      this.showMenuPro = 'closed';
    }
    if(this.showMenuPGA == 'stay'){
      this.showMenuPGA = 'closed';
    }
    if(this.showMenuOtros == 'stay'){
      this.showMenuOtros = 'closed';
    }
  }

  //Router Links
  setTitleSubtitle(num:number){
    this.menuData = SUBMENU_CONTENIDO[num];
    this.title=this.menuData.titulo;
    this.subtitle=this.menuData.subtitle;
  }
}
