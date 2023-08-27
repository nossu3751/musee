import { Component , OnInit, ChangeDetectorRef, Renderer2, ElementRef, HostListener} from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';
import { ArtworkService } from 'src/app/services/data/artwork.service';
import { VerifVoteService } from 'src/app/services/data/verif-vote.service';
import { AuthenticateService } from 'src/app/services/auth/authenticate.service';
import { ModalService } from 'src/app/services/ui/modal.service';

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

  constructor(
    private artworkService:ArtworkService,
    private voteService:VerifVoteService,
    private authService:AuthenticateService,
    private modalService:ModalService

  ){}
  ngOnInit(): void {
    const uid = this.authService.loggedInUser
    if(uid){
      this.artworkService.getRandomArtworks(uid,5).subscribe({
        "next":(data)=>{
          console.log(data)
          this.items = data;
          this.currentItem = this.items.shift();
          this.loadImage(this.currentItem.img_link);
          this.isVisible = true;
        }
      })
    }
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
    const uid = this.authService.loggedInUser
    this.voteService.vote({
      uid: uid,
      awid: this.currentItem.id,
      worth: true
    }).subscribe({
      "next": (data)=>{
        console.log(data)
      },
      "error": (error)=>{
        console.log(error)
      }
    })
    console.log('Accepted', this.currentItem);
    this.animationState = 'right';

  }

  decline() {
    const uid = this.authService.loggedInUser
    this.voteService.vote({
      uid: uid,
      awid: this.currentItem.id,
      worth: false
    }).subscribe({
      "next": (data)=>{
        console.log(data)
      },
      "error": (error)=>{
        console.log(error)
      }
    })
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
    if(this.currentItem){
      this.loadImage(this.currentItem.img_link);
    }else{
      this.modalService.closeModal()
    }
  }
}
