import { Component } from '@angular/core';
import { NewTranscriptComponent } from '@pages/transcribe/components/new-transcript/new-transcript.component';
import { TranscriptListComponent } from '@pages/transcribe/components/transcription-list/transcript-list.component';

@Component({
  selector: 'tr-transcribe',
  standalone: true,
  imports: [TranscriptListComponent, NewTranscriptComponent],
  templateUrl: './transcribe.component.html',
})
export class TranscribeComponent {
  view: 'list' | 'new' = 'list';
}
