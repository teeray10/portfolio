import { Component } from '@angular/core';
import { SectionHeadingComponent } from '@pages/home/shared/ui/section-heading/section-heading.component';

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
      skills: ['Javascript', 'Typescript', 'HTML', 'CSS'],
    },
    {
      heading: 'Libraries & Frameworks',
      skills: [
        'Angular',
        'React.js',
        'Astro.js',
        'Tailwind',
        'Ant Design',
        'Kendo UI',
        'SASS/LESS',
        'Strapi',
        'NgRx',
        'RxJs',
        'Node.js',
        'SignalR',
      ],
    },
    {
      heading: 'Tools & Platforms',
      skills: ['Azure DevOps', 'OData', 'Github', 'AWS', 'Webstorm', 'VS Code'],
    },
  ];
}
