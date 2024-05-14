import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisibleContentService {
  content = ['about', 'skills', 'experience', 'projects'];
  visibleContent$ = signal(this.content[0]);

  setVisibleContent(value: string): void {
    this.visibleContent$.set(value);
  }
}
