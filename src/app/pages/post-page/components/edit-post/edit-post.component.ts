import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Post } from "src/app/core/interfaces/post-interface";
import { Location } from "@angular/common";

@Component({
  selector: "app-edit-post",
  templateUrl: "./edit-post.component.html",
  styleUrls: ["./edit-post.component.css"],
})
export class EditPostComponent implements OnInit {
  public post!: Post;

  public form = this.fb.group({
    userId: ["", [Validators.required]],
    id: ["", [Validators.required]],
    title: ["", [Validators.required]],
    body: ["", [Validators.required]],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private location: Location
  ) {}

  public ngOnInit(): void {
    this.fillForm();
  }

  public fillForm(): void {
    this.post = (
      this.location.getState() as { navigationId: number; post: Post }
    ).post;
    this.form.patchValue(this.post);
  }

  public revertChanges(): void {
    this.form.patchValue(this.post);
  }

  applyChanges(): void {
    this.router.navigate(["post-page/post-list"], {
      state: { editedPost: this.form.getRawValue() },
    });
  }
}
