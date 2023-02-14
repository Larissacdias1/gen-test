import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { take } from "rxjs/operators";
import { Post } from "src/app/core/interfaces/post-interface";
import { PostService } from "src/app/core/services/post.service";
import { ConfirmEditDialog } from "../confirm-edit-dialog/confirm-edit-dialog.component";
import { Location } from "@angular/common";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"],
})
export class PostListComponent implements OnInit {
  constructor(
    public dataService: PostService,
    private dialog: MatDialog,
    private router: Router,
    private location: Location
  ) {}

  public postsDataFromUrl: Array<Post> = [];
  public formGroup!: FormGroup;

  public ngOnInit(): void {
    this.getData();
  }

  public openEditDialog(post: Post): void {
    this.dialog
      .open(ConfirmEditDialog, { data: post })
      .afterClosed()
      .pipe(take(1))
      .subscribe((confirmEdit) => {
        if (confirmEdit) {
          this.router.navigate(["post-page/data-screen"], { state: { post } });
        }
      });
  }

  public getData(): void {
    this.dataService.getPostsData().subscribe((postsData) => {
      const editedPost = (
        this.location.getState() as { navigationId: number; editedPost: Post }
      ).editedPost;
      this.postsDataFromUrl = postsData.map((post) => {
        if (editedPost && editedPost.id === post.id) {
          return editedPost;
        }
        return post;
      });
    });
  }
}
