import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.scss']
})
export class ArtworkComponent implements OnInit {
  id!:number 
  constructor(private router:Router, private activatedRoute:ActivatedRoute){
    
  }
  ngOnInit(): void {
      this.activatedRoute.params.subscribe({
        "next":(params)=>{
          this.id = params["id"]
          console.log(this.id)
        }
      })
  }
}
