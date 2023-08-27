import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/auth/authenticate.service';
import { ArtworkService } from 'src/app/services/data/artwork.service';
import { UserService } from 'src/app/services/data/user.service';
import { ModalService } from 'src/app/services/ui/modal.service';
import { RateArtComponent } from '../rate-art/rate-art.component';
import { ToVerificationComponent } from '../../alerts/to-verification/to-verification.component';

@Component({
  selector: 'app-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.scss']
})
export class KeysComponent implements OnInit{
  myInfo:any = null;
  artworks:any = null;
  loadedImageCount:number = 0;
  isKeyClicked:boolean = false;
  constructor(
    private authService:AuthenticateService,
    private userService:UserService,
    private artworkService:ArtworkService,
    private modalService:ModalService
  ){

  }

  onKeyClicked() {
    this.isKeyClicked = !this.isKeyClicked;
  }

  openModal() {
    this.modalService.openModal(ToVerificationComponent, "")
  }

  ngOnInit(): void {
    const user = this.authService.loggedInUser
    if (user) {
      this.userService.getUser(user).subscribe({
        "next":(data)=>{
          this.myInfo = data;
          console.log(this.myInfo.tokens)
        }
      })
      this.artworkService.getArtworks().subscribe({
        "next":(data)=>{
          this.artworks = data
          this.artworks = this.artworks.filter((aw:any)=>{
            return aw.verified === true;
          })
          for(let aw of this.artworks){
            let img = new Image()
            img.src = aw.img_link
            img.onload = ()=>{
              this.loadedImageCount += 1;
              aw.img = img
            }
          }
        }
      })
    }
    
  }
}
