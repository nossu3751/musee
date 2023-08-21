import { Component , ChangeDetectorRef, Renderer2, ElementRef, HostListener} from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-rate-art',
  templateUrl: './rate-art.component.html',
  styleUrls: ['./rate-art.component.scss'],
  animations: [
    trigger('swipeAnimation', [
      state('initial', style({ opacity: 1, transform: 'translateX(0)' })),
      state('right', style({ transform: 'translateX(100%)', opacity: 0 })),
      state('left', style({ transform: 'translateX(-100%)', opacity: 0 })),
      transition('initial => right', animate('0.7s ease-out')),
      transition('initial => left', animate('0.7s ease-out')),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.7s', style({ opacity: 1 }))
      ])
    ]),
  ],
})
export class RateArtComponent {
  items = ['item1', 'item2', 'item3', 'item4']
  currentItem = this.items.shift();
  animationState = 'initial';
  isVisible = true;

  accept() {
    console.log('Accepted', this.currentItem);
    this.animationState = 'right';
  }

  decline() {
    console.log('Declined', this.currentItem);
    this.animationState = 'left';
  }

  onAnimationDone(event: any) {
    // ensure the animation done is triggered only when swiped right or left
    if (event.phaseName === 'done' && (this.animationState === 'right' || this.animationState === 'left')) {
      // remove the element from dom so that animation can enter the :enter state again upon recreation
      this.isVisible = false;
      // change state to initial again so the following animation (reappearing) doesnt trigger this again
      this.animationState = 'initial'
      // wait for 
      setTimeout(() => {
        this.loadNextItem();
        this.isVisible = true;
      }, 50);
    }
  }




  private loadNextItem(){
    this.currentItem = this.items.shift();
  }
}
