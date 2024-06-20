import {Component} from '@angular/core';
import {GithubIconComponent} from '@home/icons/github-icon/github-icon.component';
import {LinkedinIconComponent} from '@home/icons/linkedin-icon/linkedin-icon.component';

@Component({
  selector: 'tr-social',
  standalone: true,
  imports: [
    GithubIconComponent,
    LinkedinIconComponent
  ],
  templateUrl: './social.component.html',
})
export class SocialComponent {

}
