import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { PostListComponent } from './components/post-list/post-list.component';

const routes: Routes = [
  { 
    path: '', redirectTo: 'post-list', pathMatch: 'full'
  },
  { 
    path: 'data-screen', component: EditPostComponent,
  },
  { 
    path: 'post-list', component: PostListComponent,
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostPageRoutingModule { }
