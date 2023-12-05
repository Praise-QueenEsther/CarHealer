import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageNameService {

  // imageDescriptions: { name: string, description: string }[] = [];
  imageDescriptions: { vehicleName: string, vehicleDescription: string }[] = [];

  constructor() {}

  // addImageDescription(name: string, description: string) {
  //   this.imageDescriptions.push({ name, description });
  // }
  // imageDescriptions: { vehicleName: string, vehicleDescription: string }[] = [];
  addImageDescription(data: { vehicleName: string, vehicleDescription: string }) {
    this.imageDescriptions.push(data);
  }
 
  
  // addImageDescription(data: { name: string,description: string }) {
  //   this.imageDescriptions.push({ vehicleName: data.name,  vehichleDescription: data.description });
  // }

  getFilteredDescriptions(searchQuery: string): {vehicleName: string, vehicleDescription: string }[] {
    return this.imageDescriptions.filter((description) =>
      (description.vehicleName && description.vehicleName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (description.vehicleDescription && description.vehicleDescription.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }
  
}


