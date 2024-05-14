import {AfterViewChecked, Component, inject} from '@angular/core';
import {ActivatedRoute, RouterOutlet} from '@angular/router';
import {SidebarComponent} from '@ui/sidebar/sidebar.component';
import {ProjectsComponent} from '@ui/projects/projects.component';
import {ExperienceComponent} from '@ui/experience/experience.component';
import {SkillsComponent} from '@ui/skills/skills.component';
import {AboutComponent} from '@ui/about/about.component';
import {VisibleContentService} from 'src/app/utility/visible-content.service';

@Component({
  selector: 'tr-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, ProjectsComponent, ExperienceComponent, SkillsComponent, AboutComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewChecked {
  private visibleContentService = inject(VisibleContentService);
  private route = inject(ActivatedRoute);

  ngAfterViewChecked(): void {
    this.visibleContentService.setVisibleContent(this.route.snapshot.fragment);
  }
}
