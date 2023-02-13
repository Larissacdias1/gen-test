import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayDataModule } from './pages/display-data/display-data.module';
import { EditDialogModule } from './pages/display-data/components/edit-dialog/edit-dialog.module';
import { DataScreenModule } from './pages/display-data/components/data-screen/data-screen.module';
import { WelcomePageModule } from './pages/welcome-page/welcome-page.module';
import { ThanksPageModule } from './pages/thanks-page/thanks-page.module';

const routes: Routes = [
  // {path: 'display-data', component: DisplayDataComponent},
  // {path: 'data-screen', component: DataScreenComponent},
  // {path: 'edit-dialog', component: EditDialogComponent},
  // {path: 'welcome-page', component: WelcomePageComponent},
  // {path: 'thanks-page', component: ThanksPageComponent},
  // {path: '', redirectTo: 'welcome-page', pathMatch:'full'},

  // {path: 'display-data', component: DisplayDataComponent},
  // {path: 'data-screen', component: DataScreenComponent},

  { path: 'display-data', 
    loadChildren: () => import('./pages/display-data/display-data.module').then(m => m.DisplayDataModule) 
  },
  { 
    path: 'data-screen', 
    loadChildren: () => import('./pages/display-data/components/data-screen/data-screen.module').then(m => m.DataScreenModule) 
  },
  {
    path: 'edit-dialog',
    loadChildren: async () => import('./pages/display-data/components/edit-dialog/edit-dialog.module').then((m) => m.EditDialogModule),
  },
  {
    path: 'welcome-page',
    loadChildren: async () => import('./pages/welcome-page/welcome-page.module').then((m) => m.WelcomePageModule),
  },
  {
    path: 'thanks-page',
    loadChildren: async () => import('./pages/thanks-page/thanks-page.module').then((m) => m.ThanksPageModule),
  },
  {
    path: '', redirectTo: 'welcome-page', pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
