import { Component } from '@angular/core';
import {GithubIconComponent} from '@icons/github-icon/github-icon.component';
import {LinkedinIconComponent} from '@icons/linkedin-icon/linkedin-icon.component';

@Component({
  selector: 'tr-social',
  standalone: true,
  imports: [
    GithubIconComponent,
    LinkedinIconComponent
  ],
  templateUrl: './social.component.html',
  styleUrl: './social.component.scss'
})
export class SocialComponent {

}
