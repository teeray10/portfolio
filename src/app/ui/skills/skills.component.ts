import {Component} from '@angular/core';

@Component({
  selector: 'tr-skills',
  standalone: true,
  imports: [],
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
      skills: ['Angular', 'React', 'TailwindCSS']
    },
    {
      heading: 'Tools & Platforms',
      skills: ['Azure DevOps', 'Github', 'AWS', 'Webstorm', 'VS Code']
    }
  ];
}
