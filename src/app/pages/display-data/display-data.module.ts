import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayDataRoutingModule } from './display-data-routing.module';
import { DisplayDataComponent } from './display-data.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DisplayDataComponent
  ],
  imports: [
    CommonModule,
    DisplayDataRoutingModule,
    SharedModule
  ]
})
export class DisplayDataModule { }
