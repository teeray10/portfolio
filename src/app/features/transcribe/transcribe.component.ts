import {Component} from '@angular/core';
import {TranscriptListComponent} from 'src/app/features/transcribe/components/transcription-list/transcript-list.component';
import {NewTranscriptComponent} from 'src/app/features/transcribe/components/new-transcript/new-transcript.component';


@Component({
  selector: 'tr-transcribe',
  standalone: true,
  imports: [
    TranscriptListComponent,
    NewTranscriptComponent
  ],
  templateUrl: './transcribe.component.html',
})
export class TranscribeComponent {
  view: 'list' | 'new' = 'list';
}
