import {AfterViewChecked, Component, HostListener, inject} from '@angular/core';
import {AboutComponent} from '@ui/about/about.component';
import {ArrowUpIconComponent} from '@icons/arrow-up-icon/arrow-up-icon.component';
import {ExperienceComponent} from '@ui/experience/experience.component';
import {IsVisibleDirective} from 'src/app/directives/is-visible.directive';
import {ProjectsComponent} from '@ui/projects/projects.component';
import {SidebarComponent} from '@ui/sidebar/sidebar.component';
import {SkillsComponent} from '@ui/skills/skills.component';
import {VisibleContentService} from 'src/app/utility/visible-content.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'tr-home',
  standalone: true,
  imports: [
    AboutComponent,
    ArrowUpIconComponent,
    ExperienceComponent,
    IsVisibleDirective,
    ProjectsComponent,
    SidebarComponent,
    SkillsComponent
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements AfterViewChecked {
  protected userHasScrolled = false;
  private visibleContentService = inject(VisibleContentService);
  private route = inject(ActivatedRoute);

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.userHasScrolled = window.scrollY > 100;
  }

  ngAfterViewChecked(): void {
    this.visibleContentService.setVisibleContent(this.route.snapshot.fragment);
  }
}