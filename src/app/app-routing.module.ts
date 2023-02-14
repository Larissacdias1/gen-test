import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "post-page",
    loadChildren: () =>
      import("./pages/post-page/post-page.module").then(
        (m) => m.PostPageModule
      ),
  },

  {
    path: "welcome-page",
    loadChildren: async () =>
      import("./pages/welcome-page/welcome-page.module").then(
        (m) => m.WelcomePageModule
      ),
  },
  {
    path: "thanks-page",
    loadChildren: async () =>
      import("./pages/thanks-page/thanks-page.module").then(
        (m) => m.ThanksPageModule
      ),
  },
  {
    path: "",
    redirectTo: "welcome-page",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
