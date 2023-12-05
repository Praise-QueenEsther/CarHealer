import { Injectable } from '@angular/core';
import "globals"

@Injectable({
  providedIn: 'root'
})
export class OneSignalService {

  async onLoad(): Promise<any> {
    window.OneSignal = window.OneSignal || [];
    return new Promise((resolve) => {
      window.OneSignal.push(function() {
        resolve(window.OneSignal);
      });
    });
  }

  onInit():void {
    this.onLoad().then((OneSignal)=>{
      OneSignal.init({
        appId:"cb2ed3dd-28f3-478e-a744-13861b740405",
      });
    });
  }
}


