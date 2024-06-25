import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { SectionHeadingComponent } from '@home/shared/ui/section-heading/section-heading.component';

@Component({
  selector: 'tr-projects',
  standalone: true,
  imports: [NgOptimizedImage, SectionHeadingComponent],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'taylorray.dev',
      url: '',
      description: 'I built this portfolio site using Angular 17 and various AWS services such as S3, Route53 & Cloudfront',
      imageUrl: 'assets/taylorray.dev.png'
    },
    {
      title: 'Audio Transcription App',
      url: '',
      description: 'A simple app that I built because of a need that my family and I had - transcribing audio files quickly and effortlessly. I use Assembly AI for the transcription and an AWS S3 Bucket for storage',
      imageUrl: 'assets/transcribe.png'
    }
  ]
}