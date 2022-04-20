import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.less']
})
export class TestAPIComponent implements OnInit {

  li:any;
  lis=[];
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get('localhost:8081')
      .subscribe(Response => {

        // If response comes hideloader() function is called
        // to hide that loader
        if(Response){
          hideloader();
        }
        console.log(Response)
        this.li=Response;
        this.lis=this.li.list;
      });
    function hideloader(){
      document.getElementById('loading').style.display = 'none';}
  }}
// The url of api is passed to get() and then subscribed and
// stored the response to li element data array list[] is created
// using JSON element property
