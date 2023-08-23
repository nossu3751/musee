import { Component } from '@angular/core';
import { LoadingService } from 'src/app/services/ui/loading.service';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent{
  constructor(public loadingService:LoadingService){

  }
  spinner = "assets/musee.gif"
}
