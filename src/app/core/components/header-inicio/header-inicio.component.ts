import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, OnInit } from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-header-inicio',
  standalone: true,
  imports: [MatIconModule,MatButtonModule,MatToolbarModule,MatTooltipModule,CommonModule],
  templateUrl: './header-inicio.component.html',
  styleUrl: './header-inicio.component.css',
  animations: [
    trigger('topBottom',[
      state('top',style({
        backgroundColor:'transparent'
      })),
      state('middle',style({
        backgroundColor:'white',
        boxShadow:'rgba(0, 0, 0, 0.1) 0px 10px 10px 2px'
      })),
      state('bottom',style({
        backgroundColor:'transparent'
      })),
      transition('*=>*', animate('500ms 150ms ease-in-out')),
    ])
  ]
})
export class HeaderInicioComponent{

  isScrolled = 'top';

  @HostListener('window:scroll',['$event'])
  efectScrollTransparent(e:any): void{
    const finalYOffset = document.documentElement.scrollHeight - window.innerHeight;
    if(window.pageYOffset > 0 && window.pageYOffset != finalYOffset){
      this.isScrolled = 'middle';
    }
    if(window.pageYOffset == finalYOffset || window.pageYOffset > finalYOffset){
      this.isScrolled = 'bottom';
    }
    if(window.pageYOffset <= 0){
      this.isScrolled = 'top';
    }
  }
}
