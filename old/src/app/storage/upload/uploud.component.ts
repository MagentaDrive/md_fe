import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import { StorageService } from '../../_services/storage-service.service';
import { TokenStorageService } from '../../_services/token-storage.service';
import { DocumentUploadRequest } from './document-upload-request';

@Component({
    selector: 'upload',
    templateUrl: './upload.component.html',
    
})
export class UploadComponent implements OnInit {
    errorMessage = "";
        isUploaded = false;
    currentUser: any;
    constructor(private storage: StorageService,private token: TokenStorageService ) {
    }

    ngOnInit(): void {
        this.currentUser = this.token.getUser;

    }

    tags = new FormControl('', [Validators.required, ]);
    hochschule = new FormControl('', [Validators.required,]);
    studiengang = new FormControl('', [Validators.required, ]);
    beschreibung = new FormControl('', [Validators.required,]);
    jahrgang = new FormControl('', [Validators.required, ]);
    titel = new FormControl('', [Validators.required,]);

    file!: File;

    onFileInput(files: File ): void {
      if (files) {
        this.file = files!
      }
    }
  
    
    setTagsEvent(event: any): void {
        this.tags.setValue(event.target.value);
    }

    setHochschuleEvent(event: any) {
        this.hochschule.setValue(event.target.value);
    }
    
    setStudiengangEvent(event: any): void {
        this.studiengang.setValue(event.target.value);
    }

    setBeschreibungEvent(event: any) {
        this.beschreibung.setValue(event.target.value);
    }
    
    setJahrgangEvent(event: any): void {
        this.jahrgang.setValue(event.target.value);
    }

    setTitelEvent(event: any) {
        this.titel.setValue(event.target.value);
    }
    
    onSubmit(): void{
        

       const request: DocumentUploadRequest ={
           file: this.file,
           bucketName: this.hochschule.value,
           uploaderId: 1,
           postID: 1,
           universityId: 1,
           courseId: 1
       };

            this.storage.uploadDoc(request).subscribe(
                data => {
                   this.isUploaded = true;

                },
                err => {
                    this.errorMessage = err.error.message;
                    this.isUploaded = false
                    
                
                }
              
            )

            

    }
   

   
}
