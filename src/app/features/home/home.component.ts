import {AfterViewChecked, Component, HostListener, inject} from '@angular/core';
import {AboutComponent} from '@ui/about/about.component';
import {ArrowUpIconComponent} from '@icons/arrow-up-icon/arrow-up-icon.component';
import {ExperienceComponent} from '@ui/experience/experience.component';
import {IsVisibleDirective} from 'src/app/directives/is-visible.directive';
import {ProjectsComponent} from '@ui/projects/projects.component';
import {SidebarComponent} from '@ui/sidebar/sidebar.component';
import {SkillsComponent} from '@ui/skills/skills.component';
import {AssemblyAI} from 'assemblyai';
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
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewChecked {
  client = new AssemblyAI({
    apiKey: '580f3f7e90b44d779916526382429cab',
  });
  FILE_URL = 'https://udemy-23623.s3.af-south-1.amazonaws.com/Seasons.mp3';

// Request parameters
  data = {
    audio_url: 'https://udemy-23623.s3.af-south-1.amazonaws.com/Seasons.mp3'
  }

// You can also transcribe a local file by passing in a file path
// const FILE_URL = './path/to/file.mp3';
  protected userHasScrolled = false;
  private visibleContentService = inject(VisibleContentService);
  private route = inject(ActivatedRoute);

  constructor() {
    const promise = this.run();
    promise.then(result => {
      console.log('promise!: ' + result)
    })
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.userHasScrolled = window.scrollY > 100;
  }

  run = async () => {
    // const transcript = await this.client.transcripts.create(this.data);
    // transcript.
    //   // return transcript;
    //   console.log(transcript.text);
  };

  ngAfterViewChecked(): void {
    this.visibleContentService.setVisibleContent(this.route.snapshot.fragment);
  }
}