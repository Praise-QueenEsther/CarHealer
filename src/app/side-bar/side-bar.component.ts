import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
    @Input() opened: boolean = true;

  toggleSidebar() {
    this.opened = !this.opened
}

}
