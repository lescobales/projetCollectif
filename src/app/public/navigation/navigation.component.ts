import { Component, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
@HostListener('window:scroll', ['$event'])

export class NavigationComponent {
  
  constructor(private viewportScroller: ViewportScroller) {}

  public onClick(elementId: string): void 
  { this.viewportScroller.scrollToAnchor(elementId);
   }
}
