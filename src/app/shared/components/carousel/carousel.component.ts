import { ICarouselItem } from './../../models/carousel-item.metadata';
import { NgFor, NgOptimizedImage, NgStyle } from '@angular/common';
import { AfterViewInit, Component, inject, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgStyle, NgFor,NgOptimizedImage],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit,AfterViewInit{

  @Input() height = 850;
  @Input() isFullScreen = false;
  @Input() items: ICarouselItem[] = [];

  public finalHeight: string | number = 0;
  public currentPosition = 0;

  constructor(){
    this.finalHeight = this.isFullScreen ? '100vh': `${this.height}px`
  }

  carouselLoop(){
    window.setInterval(()=>{this.setNext()},8000);
  }

  ngAfterViewInit(): void {
    this.carouselLoop()
  }

  ngOnInit(): void {
    this.items.map((i, index)=>{
      i.id = index;
      i.marginLeft= 0;
    });
  }

  setCurrentPosition(position: number){
    this.currentPosition = position;
    const itemsWithIdZero = this.items.find(i =>i.id === 0);
    if(itemsWithIdZero){
      itemsWithIdZero.marginLeft = -100 * position;
    }
  }

  setNext(){
    let finalPercentage = 0;
    let nextPosition = this.currentPosition + 1;
    if(nextPosition <= this.items.length -1){
      finalPercentage = -100 * nextPosition;
    }else {
      nextPosition = 0;
    }

    const constFinalPercentage = this.items.find(i =>i.id === 0);
    if(constFinalPercentage){
      constFinalPercentage.marginLeft = finalPercentage;
    }

    this.currentPosition = nextPosition;
  }

  setBack(){
    let finalPercentage = 0;
    let backPosition = this.currentPosition - 1;
    if(backPosition >= 0){
      finalPercentage = -100 * backPosition;
    }else{
      backPosition = this.items.length -1;
      finalPercentage = -100*backPosition;
    }

    const constFinalPercentage = this.items.find(i =>i.id === 0);
    if(constFinalPercentage){
      constFinalPercentage.marginLeft = finalPercentage;
    }

    this.currentPosition = backPosition;
  }
}
