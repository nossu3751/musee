import { Component, OnInit } from '@angular/core';
import { ArtworkService } from 'src/app/services/data/artwork.service';
import { LoadingService } from 'src/app/services/ui/loading.service';
import { RateArtComponent } from '../rate-art/rate-art.component';
import { ModalService } from 'src/app/services/ui/modal.service';

@Component({
  selector: 'app-discovery',
  templateUrl: './discovery.component.html',
  styleUrls: ['./discovery.component.scss']
})
export class DiscoveryComponent implements OnInit{
  ready:boolean = false
  artworks:any = null
  constructor(
    private artworkService:ArtworkService,
    private loadingService:LoadingService,
    private modalService: ModalService
  ){}
  ngOnInit(): void {
      this.loadingService.showLoading("data");
      
      
      this.artworkService.getArtworks().subscribe({
        "next":(data)=>{
          this.artworks = data
          this.artworks = this.artworks.filter((aw:any)=>{
            return aw.verified === true;
          })
          this.ready = true;
          console.log(this.artworks)
        }
      })
      setTimeout(()=>{
        this.modalService.openModal(RateArtComponent, "Rate Art");
      }, 2000)

  }
}
