import { CarouselComponent } from './../../shared/components/carousel/carousel.component';
import { Component } from '@angular/core';
import { HeaderInicioComponent } from "../../core/components/header-inicio/header-inicio.component";
import { ICarouselItem } from '../../shared/models/carousel-item.metadata';
import { CAROUSEL_DATA_ITEMS } from '../../shared/constants/carousel.const';
import { AccesosComponent } from "../../shared/components/accesos/accesos.component";
import { FooterComponent } from '../../core/components/footer/footer.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [HeaderInicioComponent, CarouselComponent, FooterComponent,AccesosComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;
  title = 'carousel';
}
