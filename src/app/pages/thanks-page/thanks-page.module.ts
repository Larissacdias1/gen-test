import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ThanksPageRoutingModule } from "./thanks-page-routing-module";
import { ThanksPageComponent } from "./thanks-page.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [ThanksPageComponent],
  imports: [CommonModule, ThanksPageRoutingModule, SharedModule],
})
export class ThanksPageModule {}
