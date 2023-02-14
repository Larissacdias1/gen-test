import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../interfaces/post-interface";

@Injectable({
  providedIn: "root",
})
export class PostService {
  constructor(private httpClient: HttpClient) {}

  public jsonDataUrl = "http://jsonplaceholder.typicode.com";
  public postsUrl = "/posts";

  public getPostsData(): Observable<Array<Post>> {
    return this.httpClient.get<Array<Post>>(this.jsonDataUrl + this.postsUrl);
  }
}
