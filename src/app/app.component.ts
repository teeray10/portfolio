import {AfterViewChecked, Component, HostListener, inject} from '@angular/core';
import {ActivatedRoute, RouterOutlet} from '@angular/router';
import {SidebarComponent} from '@home/ui/sidebar/sidebar.component';
import {ProjectsComponent} from '@home/ui/projects/projects.component';
import {ExperienceComponent} from '@home/ui/experience/experience.component';
import {SkillsComponent} from '@home/ui/skills/skills.component';
import {AboutComponent} from '@home/ui/about/about.component';
import {VisibleContentService} from 'src/app/features/home/utility/visible-content.service';
import {IsVisibleDirective} from 'src/app/directives/is-visible.directive';
import {ArrowUpIconComponent} from 'src/app/features/home/icons/arrow-up-icon/arrow-up-icon.component';

@Component({
  selector: 'tr-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, ProjectsComponent, ExperienceComponent, SkillsComponent, AboutComponent, IsVisibleDirective, ArrowUpIconComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewChecked {
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
