import { Component, inject } from '@angular/core';
import { VisibleContentService } from '@pages/home/utility/visible-content.service';

@Component({
  selector: 'tr-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
})
export class NavComponent {
  private service = inject(VisibleContentService);
  protected visibleContent$ = this.service.visibleContent$;
  protected content = this.service.content;

  protected isSelected(content: string): boolean {
    return this.visibleContent$() === content;
  }

  protected setVisibleContent(content: string) {
    this.service.setVisibleContent(content);
  }
}
