import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {formatDuration, intervalToDuration} from 'date-fns';

@Component({
  selector: 'tr-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  protected today = new Date();
  protected experience = [
    {
      id: 1,
      employer: 'DVT',
      employmentType: 'permanent',
      startDate: '2021-03-01',
      endDate: this.today,
    }
  ]

  protected getDuration(startDate: string | Date, endDate: string | Date) {
    // differenc
    // formatDuration(38, {})
    return formatDuration(intervalToDuration({
      start: new Date(startDate),
      end: new Date(endDate),
    }), {format: ['years', 'months']});
    // return `${differenceInCalendarYears(startDate, endDate)} years ${differenceInMonths(endDate, startDate)} months`;
  }
}
