import { Routes } from '@angular/router';
import { MenunavComponent } from './shared/components/menunav/menunav.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EvapotranspiracionComponent } from './pages/monitoreo/evapotranspiracion/evapotranspiracion.component';
import { IndicehumedadComponent } from './pages/monitoreo/indicehumedad/indicehumedad.component';
import { RadiacionuvComponent } from './pages/pronostico/radiacionuv/radiacionuv.component';
import { RiesgoclimaticoComponent } from './pages/pronostico/riesgoclimatico/riesgoclimatico.component';
import { RiesgocultivoComponent } from './pages/pronostico/riesgocultivo/riesgocultivo.component';
import { DatoshidrometereologicosComponent } from './pages/pga/datoshidrometereologicos/datoshidrometereologicos.component';
import { SatelitegoesComponent } from './pages/pga/satelitegoes/satelitegoes.component';
import { EstudiosComponent } from './pages/otros/estudios/estudios.component';
import { AcercadeComponent } from './pages/otros/acercade/acercade.component';
import { MonitoreofenologicoComponent } from './pages/monitoreo/monitoreofenologico/monitoreofenologico.component';
import { MonitoreotemperaturaComponent } from './pages/monitoreo/monitoreotemperatura/monitoreotemperatura.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  // MONITOREO
  { path: 'v2', component: MenunavComponent,
    children:[
      //Monitoreo
      { path: 'monitoreo/evapotranspiracion', component: EvapotranspiracionComponent },
      { path: 'monitoreo/indice-humedad', component: IndicehumedadComponent},
      { path: 'monitoreo/monitoreo-fenologico', component: MonitoreofenologicoComponent},
      { path: 'monitoreo/monitoreo-temperatura', component: MonitoreotemperaturaComponent},

      //Pronostico
      { path: 'pronostico/radiacion-uv', component: RadiacionuvComponent},
      { path: 'pronostico/pronostico-climatico', component: RiesgoclimaticoComponent},
      { path: 'pronostico/riesgo-cultivo', component: RiesgocultivoComponent},

      //PGA
      { path: 'pga/datos-hidrometereologicos', component: DatoshidrometereologicosComponent},
      { path: 'pga/satelite-goes', component: SatelitegoesComponent},

      //Otros
      { path: 'otros/estudios', component: EstudiosComponent},
      { path: 'otros/acerca-de', component: AcercadeComponent},
    ]
  },
];
