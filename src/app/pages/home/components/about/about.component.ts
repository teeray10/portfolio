import { Component } from '@angular/core';
import { SectionHeadingComponent } from '@pages/home/shared/ui/section-heading/section-heading.component';
import { IsVisibleDirective } from 'src/app/directives/is-visible.directive';

@Component({
  selector: 'tr-about',
  standalone: true,
  imports: [IsVisibleDirective, SectionHeadingComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {}
