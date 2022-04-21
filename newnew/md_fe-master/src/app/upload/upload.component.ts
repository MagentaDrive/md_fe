import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-overview',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.less']
})
export class OverviewComponent implements OnInit {

  fileName = '';

  constructor(private http: HttpClient) {}

  onFileSelected(event) {

    const file:File = event.target.files[0];

    if (file) {

      this.fileName = file.name;

      const formData = new FormData();

      formData.append("thumbnail", file);

      const upload$ = this.http.post("/api/thumbnail-upload", formData);

      upload$.subscribe();
    }
  }
  ngOnInit(): void {
  }

}
