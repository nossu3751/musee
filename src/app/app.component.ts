import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ScreenSizeService } from './services/ui/screen-size.service';
import { LoadingService } from './services/ui/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'Musee';
  constructor(
    private screenSizeService: ScreenSizeService,
    public loadingService: LoadingService,
  ){}
}
