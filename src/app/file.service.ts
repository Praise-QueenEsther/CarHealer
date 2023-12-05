import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  // private headers = new HttpHeaders({
  //   'Content-Type': 'application/json'
  // });

  constructor(private _http: HttpClient) { }

  // downloadFile(file: string): Observable<Blob> {
  //   const body = { filename: file };

  //   return this._http.post('http://localhost:8081/download', body, {
  //     responseType: 'blob',
  //     // headers: this.headers
  //   });
  // }

//   downloadFile(file:String){
//     var body = {filename:file};

//     return this._http.post('http://localhost:8081/download',body,{
//         responseType : 'blob',
//         headers:new HttpHeaders().append('Content-Type','application/json')
//     });
// }


}
