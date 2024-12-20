import {
  AfterViewChecked,
  Component,
  HostListener,
  inject,
} from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { VisibleContentService } from '@pages/home/utility/visible-content.service';

@Component({
  selector: 'tr-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewChecked {
  private visibleContentService = inject(VisibleContentService);
  private route = inject(ActivatedRoute);

  mouseX = 0;
  mouseY = 0;
  background = 'transparent';

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: any) {
    this.mouseX = e.pageX;
    this.mouseY = e.pageY;
    this.background = `radial-gradient(600px at ${e.pageX}px ${e.pageY}px, rgba(78, 147, 165, 0.15), transparent 80%)`;
  }

  ngAfterViewChecked(): void {
    this.visibleContentService.setVisibleContent(this.route.snapshot.fragment);
  }

  mouseBg(): string {
    return this.background;
  }
}
