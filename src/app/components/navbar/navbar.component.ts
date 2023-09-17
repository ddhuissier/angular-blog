import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [CommonModule, FontAwesomeModule],
  standalone: true
})
export class NavbarComponent {
  showMenu = false;
  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }

  faCircleUser = faCircleUser;
}
