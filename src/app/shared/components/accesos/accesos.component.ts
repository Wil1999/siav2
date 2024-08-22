import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { Router } from '@angular/router';
@Component({
  selector: 'app-accesos',
  standalone: true,
  //providers: [provideNativeDateAdapter()],
  providers: [],
  imports: [MatButtonModule, MatTooltipModule, MatIconModule, MatExpansionModule],
  templateUrl: './accesos.component.html',
  styleUrl: './accesos.component.css'
})
export class AccesosComponent {
  constructor(private router: Router) { }
  public panelOpenState = false;

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  navegarPronostico() {

  }



  redirectToProducts(path:string) {
    this.router.navigate([path]).then(() => {
      this.activarMonitoreoTab();
    }).catch(err => {
      console.error('Navigation error:', err);
    });
  }
  activarMonitoreoTab() {
    const monitoreoTab = document.getElementById('monitoreo-tab');
    const pronosticoTab = document.getElementById('pronostico-tab');
    const monitoreo = document.getElementById('monitoreo');
    const pronostico = document.getElementById('pronostico');
    const btnevapo = document.getElementById('btn-evapo');


    if (monitoreoTab) {
      monitoreoTab.classList.add('active');
      monitoreoTab.setAttribute('aria-selected', 'true');
    }

    if (pronosticoTab) {
      pronosticoTab.classList.remove('active');
      pronosticoTab.setAttribute('aria-selected', 'false');
    }

    if (monitoreo) {
      monitoreo.classList.remove('hidden');
      monitoreo.classList.add('visible');  // Asegúrate de que "visible" esté definido en tu CSS si es necesario
    }

    if (pronostico) {
      pronostico.classList.add('hidden');
      pronostico.classList.remove('visible');  // Asegúrate de que "hidden" esté definido en tu CSS si es necesario
    }

    if (btnevapo) {
      btnevapo.focus();
      btnevapo.click();
    }
    }


}
