import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtworkService } from 'src/app/services/data/artwork.service';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.scss']
})
export class ArtworkComponent implements OnInit {
  id!: number;
  artwork: any = null;
  email_name: string = "";
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private artworkService: ArtworkService
  ) {
    
  }
  ngOnInit(): void {
      this.activatedRoute.params.subscribe({
        "next":(params)=>{
          this.id = params["id"]
          console.log(this.id)
          this.artworkService.getArtworkDetails(this.id).subscribe({
            "next": (data) => {
              console.log(data)
              this.artwork = data
              this.email_name = this.artwork.user.email.split("@")[0]
            }
          })
        }
      })
  }
}
