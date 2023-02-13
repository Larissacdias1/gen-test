import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HttpClientModule} from '@angular/common/http';

// Components imports
// import { DisplayDataComponent } from './pages/display-data/display-data.component';
// import { DataScreenComponent } from './pages/data-screen/data-screen.component';
// import { EditDialogComponent } from './pages/edit-dialog/edit-dialog.component';
// import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';


// Material Design imports below


// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
// import { MatListModule } from '@angular/material/list';
// import { MatCardModule } from '@angular/material/card';
// import { MatDividerModule } from '@angular/material/divider';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatInputModule } from '@angular/material/input';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from './shared/shared.module';

// import { ThanksPageComponent } from './pages/thanks-page/thanks-page.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
