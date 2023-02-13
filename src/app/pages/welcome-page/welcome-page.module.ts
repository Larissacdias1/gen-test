import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomePageRoutingModule } from './welcome-page-routing.module';
import { WelcomePageComponent } from './welcome-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [WelcomePageComponent],
  imports: [
    CommonModule,
    WelcomePageRoutingModule,
    SharedModule
  ]
})
export class WelcomePageModule { }