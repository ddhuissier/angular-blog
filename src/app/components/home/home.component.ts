import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { LoginComponent } from '../login/login.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    CommonModule,
    NavbarComponent,
    LoginComponent,
    PostComponent,
    FooterComponent
  ],
  standalone: true
})
export class HomeComponent {
  isAuthenticated = false;
}
