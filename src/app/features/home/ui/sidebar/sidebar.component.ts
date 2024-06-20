import {Component} from '@angular/core';
import {SocialComponent} from '@home/ui/social/social.component';
import {NavComponent} from '@home/ui/nav/nav.component';

@Component({
  selector: 'tr-sidebar',
  standalone: true,
  imports: [
    SocialComponent,
    NavComponent
  ],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
}
