import { AfterViewChecked, Component, ElementRef, HostListener, inject, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AboutComponent } from '@home/components/about/about.component';
import { ExperienceComponent } from '@home/components/experience/experience.component';
import { ProjectsComponent } from '@home/components/projects/projects.component';
import { SidebarComponent } from '@home/components/sidebar/sidebar.component';
import { SkillsComponent } from '@home/components/skills/skills.component';
import { ArrowUpIconComponent } from '@home/icons/arrow-up-icon/arrow-up-icon.component';
import { VisibleContentService } from '@home/utility/visible-content.service';
import { IsVisibleDirective } from 'src/app/directives/is-visible.directive';

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
  @ViewChild('mousecircle')
  mouse!: ElementRef;

  private visibleContentService = inject(VisibleContentService);
  private route = inject(ActivatedRoute);
  
  userHasScrolled = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.userHasScrolled = window.scrollY > 100;
  }

  ngAfterViewChecked(): void {
    this.visibleContentService.setVisibleContent(this.route.snapshot.fragment);
  }
}