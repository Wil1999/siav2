import { Component } from '@angular/core';
import { MapComponent } from '../../../shared/components/map/map.component';
import { ModalComponent } from '../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-evapotranspiracion',
  standalone: true,
  imports: [MapComponent,ModalComponent],
  templateUrl: './evapotranspiracion.component.html',
  styleUrl: './evapotranspiracion.component.css'
})
export class EvapotranspiracionComponent {

}
