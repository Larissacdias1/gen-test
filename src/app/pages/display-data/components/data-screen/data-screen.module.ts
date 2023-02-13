import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataScreenRoutingModule } from './data-screen-routing.module';
import { DataScreenComponent } from './data-screen.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DataScreenComponent
  ],
  imports: [
    CommonModule,
    DataScreenRoutingModule,
    SharedModule
  ]
})
export class DataScreenModule { }
