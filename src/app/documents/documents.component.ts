import { Component, OnInit } from '@angular/core';
import { StorageService } from '@app/_services/storage.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.less']
})
export class DocumentsComponent implements OnInit {
  alertService: any;
  loading: boolean;

  constructor(private storage: StorageService) { }

  ngOnInit(): void {
    console.log("herrrrreee")
    this.storage.getAllDocs().subscribe(
      data => {
       console.log("successfull")
        },

      error => {

      }

    )};

}
