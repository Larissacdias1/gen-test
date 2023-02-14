import { Component } from "@angular/core";
import { RoutesInterface } from "./core/interfaces/router-interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "gen-test";

  sideMenuToggle(menu: any) {
    menu.toggle();
  }

  public routesLinks: Array<RoutesInterface> = [
    {
      title: "Welcome page",
      route: "/welcome-page",
    },
    {
      title: "Posts page",
      route: "/post-page",
    },
    {
      title: "Thanks page",
      route: "/thanks-page",
    },
  ];
}
