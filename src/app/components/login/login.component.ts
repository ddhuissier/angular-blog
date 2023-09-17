import { Component } from '@angular/core';
import {
  Input,
  Ripple,
  initTE,
} from "tw-elements";

initTE({ Input, Ripple });

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true
})
export class LoginComponent {

}
