import {AfterViewChecked, Component, HostListener, inject} from '@angular/core';
import {ActivatedRoute, RouterOutlet} from '@angular/router';
import {SidebarComponent} from '@ui/sidebar/sidebar.component';
import {ProjectsComponent} from '@ui/projects/projects.component';
import {ExperienceComponent} from '@ui/experience/experience.component';
import {SkillsComponent} from '@ui/skills/skills.component';
import {AboutComponent} from '@ui/about/about.component';
import {VisibleContentService} from 'src/app/utility/visible-content.service';
import {IsVisibleDirective} from 'src/app/directives/is-visible.directive';
import {ArrowUpIconComponent} from '@icons/arrow-up-icon/arrow-up-icon.component';

@Component({
  selector: 'tr-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, ProjectsComponent, ExperienceComponent, SkillsComponent, AboutComponent, IsVisibleDirective, ArrowUpIconComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewChecked {
  @HostListener('window:scroll', [])
  onScroll(): void {
    this.userHasScrolled = window.scrollY > 100;
  }

  private visibleContentService = inject(VisibleContentService);
  private route = inject(ActivatedRoute);
  protected userHasScrolled = false;

  ngAfterViewChecked(): void {
    this.visibleContentService.setVisibleContent(this.route.snapshot.fragment);
  }
}
