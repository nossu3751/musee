import { Component , OnInit, ChangeDetectorRef, Renderer2, ElementRef, HostListener} from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';
import { ArtworkService } from 'src/app/services/data/artwork.service';

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
export class RateArtComponent implements OnInit{
  items:any = null
  currentItem:any = null;
  currentImageLoaded:boolean = false;
  animationState = 'initial';
  isVisible = false;

  constructor(private artworkService:ArtworkService){}
  ngOnInit(): void {
    this.artworkService.getRandomArtworks(1,5).subscribe({
      "next":(data)=>{
        this.items = data;
        this.currentItem = this.items.shift();
        this.loadImage(this.currentItem.img_link);
        this.isVisible = true;
      }
    })
  }

  loadImage(imgLink:string) {
    let img = new Image();
    img.src = imgLink;
    img.onload = () => {
      this.currentImageLoaded = true;
    }
  }

  onImageLoaded() {
    this.currentImageLoaded = true;
  }

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
        this.currentImageLoaded = false;
        this.loadNextItem();
        this.isVisible = true;
      }, 50);
    }
  }

  private loadNextItem(){
    this.currentItem = this.items.shift();
    this.loadImage(this.currentItem.img_link);
  }
}
