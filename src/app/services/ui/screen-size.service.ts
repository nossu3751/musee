import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {
  private htmlHeightSource = new BehaviorSubject<number>(0);
  private htmlWidthSource = new BehaviorSubject<number>(0);

  htmlHeight$ = this.htmlHeightSource.asObservable();
  htmlWidth$ = this.htmlWidthSource.asObservable();

  constructor() { 
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
    window.addEventListener('orientationchange', () => this.checkScreenSize());
  }

  private checkScreenSize() {
    const htmlHeight = document.documentElement.clientHeight;
    this.htmlHeightSource.next(htmlHeight);
    document.documentElement.style.setProperty('--html-height', htmlHeight + 'px');

    const htmlWidth = document.documentElement.clientWidth;
    this.htmlWidthSource.next(htmlWidth);
    document.documentElement.style.setProperty('--html-width', htmlWidth + 'px');

  }
}
