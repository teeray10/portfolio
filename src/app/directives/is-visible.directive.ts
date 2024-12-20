import { AfterViewInit, Directive, ElementRef, inject } from '@angular/core';
import { VisibleContentService } from '@pages/home/utility/visible-content.service';

@Directive({
  selector: '[IsVisible]',
  standalone: true,
})
export class IsVisibleDirective implements AfterViewInit {
  private viewContainerRef = inject(ElementRef);
  private visibleContentService = inject(VisibleContentService);

  ngAfterViewInit() {
    const observedElement = this.viewContainerRef.nativeElement;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.visibleContentService.setVisibleContent(entry.target.ariaLabel);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(observedElement);
  }
}
