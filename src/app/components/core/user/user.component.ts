import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthenticateService } from 'src/app/services/auth/authenticate.service';
import { ArtworkService } from 'src/app/services/data/artwork.service';
import { UserService } from 'src/app/services/data/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
  myInfo:any = null;
  myArtworks:any = null;
  allImagesLoaded:boolean = false;
  loadedImagesCount:BehaviorSubject<number> = new BehaviorSubject<number>(0);
  constructor(
    private userService:UserService,
    private awService:ArtworkService,
    public authService:AuthenticateService,
    private router:Router
  ) {}

  loadImages(artWorks:any[]) {
    for(let aw of artWorks){
      console.log(aw)
      let img = new Image();
      img.src = aw.img_link;
      img.onload = () => {
        this.loadedImagesCount.next(this.loadedImagesCount.value + 1)
        console.log(aw.id, "loaded!")
      }
    }
  }

  ngOnInit(): void {
    const user = this.authService.loggedInUser
    if (!user) {
      this.router.navigateByUrl('/login')
    }else{
      this.userService.getUser(user).subscribe({
        "next":(data)=>{
          this.myInfo = data;
        }
      })
      this.awService.getUserArtworks(user).subscribe({
        "next":(data)=>{
          this.myArtworks = data;
          this.loadImages(this.myArtworks)
        }
      })
    }
      
  }
}
