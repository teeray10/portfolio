import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'tr-refresh-icon',
  standalone: true,
  imports: [],
  templateUrl: './refresh-icon.component.html',
  styleUrl: './refresh-icon.component.scss'
})
export class RefreshIconComponent {
  @Output() onRefresh = new EventEmitter<void>();
}
