
import { Component, ViewChild, ElementRef } from '@angular/core';
import { FileSelectDirective, FileUploader, FileItem } from 'ng2-file-upload';
// import { ImageNameService } from 'src/app/shared/image-name.service';
// import { FileuploadService } from 'src/app/fileupload.service';
// import { CookieService } from 'ngx-cookie-service';
// import { SelectedFile } from 'src/app/model';
import 'bootstrap'; // Imports the entire Bootstrap JavaScript library

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  vehicleName=""
  vehicleDescription=""
  loadFiles: any;     
  selectedFiles: File[] = [];
  imageDescriptions: string[] = [];
  name: string = '';  
  description: string = '';
  @ViewChild('modal') modal!: ElementRef;
  constructor() {}

  // fileSelect(event: any) {
  //   for (let i = 0; i < event.target.files.length; i++) {
  //     const file = event.target.files[i];
  //     this.selectedFiles.push(file);
  //   }
  // }
  
  


  // uploadSingleFile(item: FileItem) {
  //   console.log('itemmmmm', item);
  //   this.selectedFiles = []; 
  // }

  // uploadFiles() {
  //   console.log('itemmmmm');
  //   this.selectedFiles = [];
  // }

  // forFiles() {
  //   if (this.selectedFiles.length === 1) {
  //     console.log('Uploading a single file:', this.selectedFiles[0].name);
  //     this.selectedFiles = [];
  //   }
    
 // }

  // onSubmit() {
  //   if (this.selectedFiles.length === 0) {
  //     console.log('No files selected. Please select at least one file.');
  //     return;
  //   }

  //   const fileDescriptions = [];
  //   const fileNames = [];
  //   for (const file of this.selectedFiles) {
  //     console.log('Selected file.....:', this.selectedFiles);
  //     const description=file.type
  //     const name=file.name
  //     console.log('Image description:', description);
  //     console.log('Image description:', name)

  //     fileDescriptions.push(description)
  //     fileNames.push(name)
  //     // localStorage.setItem('imageDescription',JSON.stringify(description));
  //     // localStorage.setItem('imageName',JSON.stringify (name))
  //     const expirationDate = new Date();
  //     expirationDate.setFullYear(expirationDate.getFullYear() + 1)
  //     this.cookieService.set('imageDescriptions', JSON.stringify(description),expirationDate)
  //     this.cookieService.set('imageNames', JSON.stringify(name),expirationDate);
  //     // const modalInstance = new bootstrap.Modal(this.modal.nativeElement);
  //       // modalInstance.hide();
  //   }
  
  //   this.selectedFiles = [];
  //   this.imageDescriptions = [];
  //  }
  

  // onAddImage(selectedFiles: any[]) {
  //   if (selectedFiles.length === 0) {
  //     console.log('No files selected. Please select at least one file.');
  //     return;
  //   }
  
  //   for (const file of selectedFiles) {
  //     console.log('Selected fileeeeeee:', selectedFiles);
  //     console.log('Image description:', file.type);
  //     this.imageService.addImageDescription(file.name, file.type);
  //   }

  //   this.selectedFiles = [];
  //   this.imageDescriptions = [];
  // }
  


  // addVehicle() {
  //   // Create a new vehicle object and push it to the array
  //   this.imageService.addImageDescription({ vehicleName: this.vehicleName, vehicleDescription: this.vehicleDescription });
  //   // Clear the input fields
  //   this.vehicleName = '';
  //   this.vehicleDescription = '';
  // }
  


}

  

