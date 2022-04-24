import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.less']
})
export class ShowPostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showComment() {
    const Feld = <HTMLInputElement> document.getElementById("2");
    const Post = <HTMLInputElement> document.getElementById("3");
      Feld.style.display = "block";
      Post.style.display = "inline";
    }

  like() {

  }

  dislike() {

  }

  postComment() {

  }

  postMelden() {

  }
}
