import { Component } from '@angular/core';
import { RoutesInterface } from './core/interfaces/router-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gen-test';
  
  // Method to open / close side menu
  sideMenuToggle(menu:any){
    menu.toggle();
  }

  public routesLinks: Array<RoutesInterface> = [
    {
      title: 'Welcome page',
      route: '/welcome-page',
    },
    {
      title: 'Posts page',
      route: '/display-data',
    },
    {
      title: 'Thanks page',
      route: '/thanks-page',
    },
  ]
}

