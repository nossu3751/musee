import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from './services/ui/screen-size.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Musee';
  constructor(
    private screenSizeService: ScreenSizeService
  ){}

  ngOnInit(): void {
      
  }
}
