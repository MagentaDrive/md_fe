import { Component, OnInit } from '@angular/core';
import {PostService} from "@app/_services/post.service";
import {UserService} from "@app/_services/user.service";

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.less']
})
export class ShowPostComponent implements OnInit {

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.onGetPost();
  }

  showComment() {
    const Feld = <HTMLInputElement>document.getElementById("2");
    const Post = <HTMLInputElement>document.getElementById("3");
    Feld.style.display = "block";
    Post.style.display = "inline";
  }

  onGetPost(): void {
    this.postService.getPost().subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done getting Post')
    );
  }
}
    /**onGetUsers(): void {
  this.userService.getUsers().subscribe(
  (response) => console.log(response),
  (error:any) => console.log(error),
  () => console.log('Done getting Post')
  );
  }
}*/
