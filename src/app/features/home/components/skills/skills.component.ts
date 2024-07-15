import { Component } from '@angular/core';
import { SectionHeadingComponent } from '@home/shared/ui/section-heading/section-heading.component';

@Component({
  selector: 'tr-skills',
  standalone: true,
  imports: [SectionHeadingComponent],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  protected skills = [
    {
      heading: 'Programming Languages',
      skills: ['Javascript', 'Typescript', 'HTML', 'CSS']
    },
    {
      heading: 'Libraries & Frameworks',
      skills: ['Angular', 'React.js', 'Astro.js', 'Tailwind', 'Strapi', 'NgRx', 'RxJs', 'Node.js', 'SignalR', 'SASS/LESS']
    },
    {
      heading: 'Tools & Platforms',
      skills: ['Azure DevOps', 'OData', 'Github', 'AWS', 'Webstorm', 'VS Code']
    }
  ];
}
