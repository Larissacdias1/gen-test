import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Post } from "src/app/core/interfaces/post-interface";

@Component({
  selector: "app-confirm-edit-dialog",
  templateUrl: "./confirm-edit-dialog.component.html",
  styleUrls: ["./confirm-edit-dialog.component.css"],
})
export class ConfirmEditDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Post) {}
}
