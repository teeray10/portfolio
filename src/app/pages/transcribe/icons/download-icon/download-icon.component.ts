import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'tr-download-icon',
  standalone: true,
  imports: [],
  templateUrl: './download-icon.component.html'
})
export class DownloadIconComponent {
  @Output() onDownload = new EventEmitter<void>();
}
