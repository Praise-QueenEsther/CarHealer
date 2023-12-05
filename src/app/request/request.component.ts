import { Component } from '@angular/core';
// import { ImageNameService } from 'src/app/shared/image-name.service';
// import { FileuploadService } from 'src/app/fileupload.service';
import { ImageNameService } from 'app/shared/image-name.service';
import { FileuploadService } from 'app/fileupload.service';
import { CookieService } from 'ngx-cookie-service';
import 'bootstrap'; 
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {
   vehicleName=""
  vehicleDescription=""
  loadFiles: any;     
  selectedFiles: File[] = [];
  imageDescriptions: string[] = [];
  name: string = '';  
  description: string = '';
  // @ViewChild('modal') modal!: ElementRef;
  constructor(private imageService: ImageNameService, private fileUploadService: FileuploadService,private cookieService: CookieService) {}


  onSubmit() {
    if (this.selectedFiles.length === 0) {
      console.log('No files selected. Please select at least one file.');
      return;
    }

    const fileDescriptions = [];
    const fileNames = [];
    for (const file of this.selectedFiles) {
      console.log('Selected file.....:', this.selectedFiles);
      const description=file.type
      const name=file.name
      console.log('Image description:', description);
      console.log('Image description:', name)

      fileDescriptions.push(description)
      fileNames.push(name)
      // localStorage.setItem('imageDescription',JSON.stringify(description));
      // localStorage.setItem('imageName',JSON.stringify (name))
      const expirationDate = new Date();
      expirationDate.setFullYear(expirationDate.getFullYear() + 1)
      this.cookieService.set('imageDescriptions', JSON.stringify(description),expirationDate)
      this.cookieService.set('imageNames', JSON.stringify(name),expirationDate);
      // const modalInstance = new bootstrap.Modal(this.modal.nativeElement);
        // modalInstance.hide();
    }
  
    this.selectedFiles = [];
    this.imageDescriptions = [];
   }
  
   fileSelect(event: any) {
    for (let i = 0; i < event.target.files.length; i++) {
      const file = event.target.files[i];
      this.selectedFiles.push(file);
    }
  }
   
  removeFile(file: File) {
    const index = this.selectedFiles.indexOf(file);
    if (index !== -1) {
      this.selectedFiles.splice(index, 1);
      
    }
  }

  addVehicle() {
    if (this.vehicleName && this.vehicleDescription) {
      this.imageService.addImageDescription({ vehicleName: this.vehicleName, vehicleDescription: this.vehicleDescription });
      this.vehicleName = '';
      this.vehicleDescription = '';
    }
  }
}
