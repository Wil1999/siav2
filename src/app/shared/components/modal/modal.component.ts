import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import { TableComponent } from "../table/table.component";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatTabsModule, TableComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations:[
    trigger('openCloseModal',[
      state('open',style({
        maxWidth:'45rem'
      })),
      state('closed',style({
        maxWidth:'0px'
      })),
      transition('open=>closed', animate('700ms 100ms ease')),
      transition('closed=>open', animate('700ms 100ms ease'))
    ]),
    trigger('openCloseContained',[
      state('open',style({
        visibility: 'visible'
      })),
      state('closed',style({
        display: 'none'
      })),
      transition('open=>closed', animate('700ms 100ms ease')),
      transition('closed=>open', animate('700ms 100ms ease')),
    ])
  ]
})
export class ModalComponent {
  isExpandedM = "closed";
  isExpandedC = "closed";
  isExpanded =false;

  toggleAccordion() {
    this.isExpanded = !this.isExpanded;
    if(this.isExpanded){
      this.isExpandedM = "open";
      this.isExpandedC = "open";
    }else{
      this.isExpandedM = "closed";
      this.isExpandedC = "closed";
    }
  }

}
