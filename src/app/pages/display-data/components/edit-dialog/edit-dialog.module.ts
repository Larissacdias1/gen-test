import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditDialogRoutingModule } from './edit-dialog-routing.module';
import { EditDialogComponent } from './edit-dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [EditDialogComponent],
  imports: [
    CommonModule,
    EditDialogRoutingModule,
    SharedModule
  ]
})
export class EditDialogModule { }