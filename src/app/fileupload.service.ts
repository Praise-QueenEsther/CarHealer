import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {

  // constructor() { }
  private uploadDelay = 2000;

  constructor() {}

  uploadFiles(formData: FormData): Promise<any> {
    // Simulate the file upload process
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Upload successful');
      }, this.uploadDelay);
    });
  }
}
