import { Component, OnInit } from '@angular/core';
import { ArtworkService } from 'src/app/services/data/artwork.service';
import { LoadingService } from 'src/app/services/ui/loading.service';
import { RateArtComponent } from '../rate-art/rate-art.component';
import { ModalService } from 'src/app/services/ui/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discovery',
  templateUrl: './discovery.component.html',
  styleUrls: ['./discovery.component.scss']
})
export class DiscoveryComponent implements OnInit{
  ready:boolean = false;
  loadedImageCount = 0;
  artworks: any = null;
  constructor(
    private artworkService:ArtworkService,
    private loadingService:LoadingService,
    private modalService: ModalService,
    private router:Router,
  ){}

  goToArtwork(id:number): void{
    this.router.navigateByUrl(`/discovery/${id}`)
  }

  ngOnInit(): void {
      this.loadingService.showLoading("data");
      
      
      this.artworkService.getArtworks().subscribe({
        "next":(data)=>{
          this.artworks = data
          this.artworks = this.artworks.filter((aw:any)=>{
            return aw.verified === true;
          })
          for(let aw of this.artworks){
            let img = new Image()
            img.src = aw.img_link
            let email_name = aw.user.email.split("@")[0]
            aw.email_name = email_name
            img.onload = ()=>{
              this.loadedImageCount += 1;
              aw.img = img
              
            }
          }
          this.ready = true;
          console.log(this.artworks)
        }
      })

      setTimeout(()=>{
        this.modalService.openModal(RateArtComponent, "Rate Art");
      }, 2000)

  }
}
