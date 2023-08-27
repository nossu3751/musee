import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-box',
  templateUrl: './img-box.component.html',
  styleUrls: ['./img-box.component.scss']
})
export class ImgBoxComponent implements OnInit{
  @Input() width = "100%";
  @Input() height = "auto";
  @Input() img!: HTMLImageElement;
  // @Input() img_name!: string;

  orientation = "horizontal"

  isHorizontal(img:HTMLImageElement){
    return img.width > img.height
  }

  ngOnInit(): void {
      if(this.img){
        this.orientation = this.isHorizontal(this.img) ? "horizontal":"vertical"
        console.log(this.orientation)
      }
  }
}
