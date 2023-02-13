import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataScreenComponent } from './components/data-screen/data-screen.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { DisplayDataComponent } from './display-data.component';

const routes: Routes = [
  { 
    path: '', component: DisplayDataComponent,
    
    // children: [
    //   {
    //     path: 'edit-dialog',
    //     component: EditDialogComponent,
    //   },
    //   {
    //     path: 'data-screen',
    //     component: DataScreenComponent
    //   }
    // ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisplayDataRoutingModule { }
