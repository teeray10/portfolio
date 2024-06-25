import { AfterViewChecked, Component, HostListener, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { AboutComponent } from '@home/components/about/about.component';
import { ExperienceComponent } from '@home/components/experience/experience.component';
import { ProjectsComponent } from '@home/components/projects/projects.component';
import { SidebarComponent } from '@home/components/sidebar/sidebar.component';
import { SkillsComponent } from '@home/components/skills/skills.component';
import { IsVisibleDirective } from 'src/app/directives/is-visible.directive';
import { ArrowUpIconComponent } from 'src/app/features/home/icons/arrow-up-icon/arrow-up-icon.component';
import { VisibleContentService } from 'src/app/features/home/utility/visible-content.service';

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
