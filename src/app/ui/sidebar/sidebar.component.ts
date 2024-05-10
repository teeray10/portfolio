import { Component } from '@angular/core';
import {SocialComponent} from '@ui/social/social.component';
import {NavComponent} from '@ui/nav/nav.component';

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
