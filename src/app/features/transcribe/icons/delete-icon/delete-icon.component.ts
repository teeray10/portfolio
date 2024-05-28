import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'tr-delete-icon',
  standalone: true,
  imports: [],
  templateUrl: './delete-icon.component.html'
})
export class DeleteIconComponent {
  @Output() onDelete = new EventEmitter<void>();
}
