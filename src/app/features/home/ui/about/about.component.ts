import { Component } from '@angular/core';
import {IsVisibleDirective} from 'src/app/directives/is-visible.directive';

@Component({
  selector: 'tr-about',
  standalone: true,
  imports: [
    IsVisibleDirective
  ],
  templateUrl: './about.component.html',
})
export class AboutComponent {

}
