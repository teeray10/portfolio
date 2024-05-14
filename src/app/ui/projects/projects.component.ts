import { Component } from '@angular/core';

@Component({
  selector: 'tr-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {

  ngOnInit() {
    console.log('ngOnInit => projects.component.ts');
  }

}
