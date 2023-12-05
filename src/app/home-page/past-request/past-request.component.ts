import { Component, OnInit } from '@angular/core';
// import { ImageNameService } from 'src/app/shared/image-name.service';
import { ImageNameService } from 'app/shared/image-name.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-past-request',
  templateUrl: './past-request.component.html',
  styleUrls: ['./past-request.component.css']
})
export class PastRequestComponent implements OnInit {
  searchQuer: string = '';
  description!: string;
  // vehichleName=""
  // vehichleDescription=""
  name!: string ;
  constructor(private imageService: ImageNameService,private cookieService: CookieService) {}
  ngOnInit() {
    
    // const imageDescriptions = JSON.parse(this.cookieService.get('imageDescriptions') || '[]');
    // const imageNames = JSON.parse(this.cookieService.get('imageNames') || '[]');
    // const vehicleDescriptions = JSON.parse(this.cookieService.get('vehicleDescriptions') || '[]');
    // const vehicleNames = JSON.parse(this.cookieService.get('vehicleNames') || '[]');

// Assign the retrieved data to your variables
  // this.description = imageDescriptions;
  // this.name = imageNames;
  //  this.vehichleDescription = vehicleDescriptions ;
  //  this.vehichleName= vehicleNames;
  }




  get filteredImageDescriptions() {
    console.log("imageservice",this.imageService)
    return this.imageService.getFilteredDescriptions(this.searchQuer);
    
  }

  // responsible for displaying the filter
  onSearch(searchQue: string){
    this.searchQuer = searchQue;
    console.log("serac",this.searchQuer)
  }
 
}
