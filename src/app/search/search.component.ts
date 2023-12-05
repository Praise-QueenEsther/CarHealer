// import { Component, EventEmitter, Output } from '@angular/core';

// @Component({
//   selector: 'app-search',
//   templateUrl: './search.component.html',
//   styleUrls: ['./search.component.css']
// })
// export class SearchComponent {
//   @Output() search = new EventEmitter<string>();
//   searchQuery: string ="";

//   onSearch() {
//     this.search.emit(this.searchQuery);
//   }
// }


import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();
  searchQuery: string = '';

  onSearch(event: Event) {
    this.searchQuery = (event.target as HTMLInputElement).value;
    this.search.emit(this.searchQuery);
  }
}

