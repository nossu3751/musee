import { Component, OnInit } from '@angular/core';
import { ArtworkService } from 'src/app/services/data/artwork.service';

@Component({
  selector: 'app-discovery',
  templateUrl: './discovery.component.html',
  styleUrls: ['./discovery.component.scss']
})
export class DiscoveryComponent implements OnInit{
  artworks:any = null
  constructor(private artworkService:ArtworkService){}
  ngOnInit(): void {
      this.artworkService.getArtworks().subscribe({
        "next":(data)=>{
          this.artworks = data
          this.artworks = this.artworks.filter((aw:any)=>{
            return aw.verified === true;
          })
          console.log(this.artworks)
        }
      })

  }
}
