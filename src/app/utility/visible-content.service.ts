import {Injectable, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisibleContentService {
  content = ['about', 'skills', 'experience', 'projects'];
  visibleContent$: WritableSignal<string> = signal(this.content[0]);

  setVisibleContent(value: string | null): void {
    if (value) {
      this.visibleContent$.set(value);
    }
  }
}
