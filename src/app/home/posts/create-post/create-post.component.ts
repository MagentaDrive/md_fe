import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.less']
})
export class CreatePostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  checkBoxToshowDocument() {
    const checkBox = <HTMLInputElement> document.getElementById("myCheck");
    const text = <HTMLInputElement> document.getElementById("Test");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

  post() {

  }
}
