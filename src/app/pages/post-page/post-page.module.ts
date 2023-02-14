import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "src/app/shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EditPostComponent } from "./components/edit-post/edit-post.component";
import { ConfirmEditDialog } from "./components/confirm-edit-dialog/confirm-edit-dialog.component";
import { PostPageComponent } from "./post-page.component";
import { PostListComponent } from "./components/post-list/post-list.component";
import { PostPageRoutingModule } from "./post-page-routing.module";

@NgModule({
  declarations: [
    EditPostComponent,
    ConfirmEditDialog,
    PostPageComponent,
    PostListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    PostPageRoutingModule,
  ],
})
export class PostPageModule {}
