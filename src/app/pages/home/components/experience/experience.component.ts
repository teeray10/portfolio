import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ArrowRightIconComponent } from '@pages/home/icons/arrow-right-icon/arrow-right-icon.component';
import { SectionHeadingComponent } from '@pages/home/shared/ui/section-heading/section-heading.component';
import { formatDuration, intervalToDuration } from 'date-fns';

@Component({
  selector: 'tr-experience',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, ArrowRightIconComponent],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  protected today = new Date();
  jobs = [
    {
      timeline: {
        text: 'MAR 2021 — PRESENT',
        startDate: '2021-03-01',
        endDate: this.today,
      },
      title: 'Frontend Developer',
      subTitles: ['Graduate Developer'],
      employer: {
        name: 'DVT',
        description: 'Software development company based in South Africa',
        url: 'https://dvtsoftware.com/',
        type: 'Permanent',
      },
      responsibilities: `Design & implement critical business software solutions. Use creative frontend skills to develop & maintain  functional, appealing & production ready web apps. Run workshops for new graduates. Refactor outdated code to align with best practices. Consume & improve RESTful APIs. Ensure mobile responsiveness on a range of devices`,
      skills: [
        'Angular',
        'Typescript',
        'Node.js',
        'NgRx',
        'RxJs',
        'HTML & CSS',
        'Agile',
        'Azure DevOps',
      ],
      projectLinks: [{ text: '', url: '' }],
    },
    {
      timeline: {
        text: 'SEP 2024 — PRESENT',
        startDate: '2024-09-01',
        endDate: this.today,
      },
      title: 'Frontend Developer',
      subTitles: [],
      employer: {
        name: 'Momentum',
        description: 'Insurance company and authorised FSP in South Africa',
        url: 'https://www.momentum.co.za/',
        type: 'Contract',
      },
      responsibilities: `Momentum had a legacy system that was set to be decommissioned in March 2025. I was tasked to rewrite the frontend using the latest version of Angular & Angular Material.`,
      skills: [
        'Angular',
        'Angular Material',
        'Typescript',
        'Tailwind',
        'Gitlab',
        'Figma',
        'JIRA',
        'SSO',
      ],
      projectLinks: [{ text: '', url: '' }],
    },
    {
      timeline: {
        text: 'MAR 2024 - AUG 2024',
        startDate: '2024-03-01',
        endDate: '2024-08-31',
      },
      title: 'Frontend Developer',
      subTitles: [],
      employer: {
        name: 'Apleona Group',
        description: 'Facilities management company based in Germany',
        url: 'https://apleona.com',
        type: 'Contract',
      },
      responsibilities: `Rewrite the existing customer facing corporate websites using the latest in web technology. Collaborate with the marketing & IT departments to identify existing issues & gather requirements. Facilitate weekly demonstrations to ensure that our solutions meet expectations`,
      skills: [
        'React.js',
        'Astro.js',
        'Javascript',
        'Tailwind',
        'Strapi',
        'Azure',
      ],
      projectLinks: [{ text: '', url: '' }],
    },
    {
      timeline: {
        text: 'DEC 2021 — MAR 2024',
        startDate: '2021-12-01',
        endDate: '2024-03-01',
      },
      title: 'Frontend Developer',
      subTitles: [],
      employer: {
        name: 'Tracker',
        description:
          'Fleet management & vehicle tracking company based in South Africa',
        url: 'https://www.tracker.co.za/',
        type: 'Contract',
      },
      responsibilities: `Collaborate with project managers, stakeholders, designers & other developers in an agile environment. Facilitate requirement gathering meetings. Develop & maintain continuous integration pipelines. Plan, design & implement new features. Maintain existing codebase. Assist IT support with user issues. Assist backend developers with API design & troubleshooting`,
      skills: [
        'Angular',
        'Typescript',
        'Azure DevOps',
        'SCSS',
        'Swagger',
        'REST',
      ],
      projectLinks: [{ text: '', url: '' }],
    },
  ];
  protected experience = [
    {
      id: 1,
      employer: 'DVT',
      employmentType: 'permanent',
      startDate: '2021-03-01',
      endDate: this.today,
    },
  ];

  protected getDuration(startDate: string | Date, endDate: string | Date) {
    // differenc
    // formatDuration(38, {})
    return formatDuration(
      intervalToDuration({
        start: new Date(startDate),
        end: new Date(endDate),
      }),
      { format: ['years', 'months'] }
    ).toUpperCase();
  }
}
