import {Component, OnInit} from '@angular/core';

import { User } from '@app/_models';
import { AccountService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent{

    constructor() {

    }

  myFunction() {
    const checkBox = <HTMLInputElement> document.getElementById("myCheck");
    const text = <HTMLInputElement> document.getElementById("Test");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

}
