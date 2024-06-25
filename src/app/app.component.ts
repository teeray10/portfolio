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
  private visibleContentService = inject(VisibleContentService);
  private route = inject(ActivatedRoute);

  mouseX = 0;
  mouseY = 0;
  background = 'background: radial-gradient(600px at 0px 0px, rgba(29, 78, 216, 0.15), transparent 80%)';

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: any) {
    this.mouseX = e.pageX;
    this.mouseY = e.pageY;
    this.background = `background: radial-gradient(600px at ${e.pageX}px ${e.pageY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
  }

  ngAfterViewChecked(): void {
    this.visibleContentService.setVisibleContent(this.route.snapshot.fragment);
  }

  mouseBg(): string {    
    return `radial-gradient(800px at ${this.mouseX}px ${this.mouseY}px, rgba(17, 80, 98, 0.15), transparent 80%)`;
  }
}
