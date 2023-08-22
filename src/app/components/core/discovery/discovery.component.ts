import { Component, OnInit } from '@angular/core';
import { ArtworkService } from 'src/app/services/data/artwork.service';
import { LoadingService } from 'src/app/services/ui/loading.service';

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
    private loadingService:LoadingService
  ){}
  ngOnInit(): void {
      this.loadingService.showLoading()
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

  }
}
