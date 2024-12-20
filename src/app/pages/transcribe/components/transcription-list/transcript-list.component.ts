import {Component} from '@angular/core';
import {TranscribeService} from 'src/app/features/transcribe/transcribe.service';
import {AsyncPipe, DatePipe} from '@angular/common';
import {DownloadIconComponent} from 'src/app/features/transcribe/icons/download-icon/download-icon.component';
import {RefreshIconComponent} from 'src/app/features/transcribe/icons/refresh-icon/refresh-icon.component';
import {DeleteIconComponent} from 'src/app/features/transcribe/icons/delete-icon/delete-icon.component';

@Component({
  selector: 'tr-transcription-list',
  standalone: true,
  imports: [
    AsyncPipe,
    DownloadIconComponent,
    RefreshIconComponent,
    DeleteIconComponent,
    DatePipe
  ],
  templateUrl: './transcript-list.component.html'
})
export class TranscriptListComponent {
  loading = this.transcribeService.getLoading();
  transcriptList = this.transcribeService.getTranscriptList();

  constructor(private transcribeService: TranscribeService) {
    transcribeService.setLoading(true);
    transcribeService.getTranscriptions();
  }

  refreshTranscript(id: string): void {
    this.transcribeService.refreshTranscript(id)
  }

  downloadTranscript(id: string): void {
    this.transcribeService.downloadTranscript(id)
  }

  deleteTranscript(id: string): void {
    this.transcribeService.deleteTranscript(id)
  }
}
