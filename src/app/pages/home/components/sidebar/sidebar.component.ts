import { Component } from '@angular/core';
import { NavComponent } from '@pages/home/components/nav/nav.component';
import { SocialComponent } from '@pages/home/components/social/social.component';

@Component({
  selector: 'tr-sidebar',
  standalone: true,
  imports: [SocialComponent, NavComponent],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {}
