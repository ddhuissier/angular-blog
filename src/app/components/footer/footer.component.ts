import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  imports: [FontAwesomeModule],
  standalone: true
})
export class FooterComponent {
  faGitHub = faGithub;
  faLinkedin = faLinkedin;
  faWhatsapp = faWhatsapp;
}
