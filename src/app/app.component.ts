import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ScreenSizeService } from './services/ui/screen-size.service';
import { LoadingService } from './services/ui/loading.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'Musee';


  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private screenSizeService: ScreenSizeService,
    public loadingService: LoadingService,
  ){
    this.matIconRegistry.addSvgIcon (
      "competition",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/nav-icons/Competition.svg")
    )
    this.matIconRegistry.addSvgIcon (
      "discovery",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/nav-icons/Discovery.svg")
    )
    this.matIconRegistry.addSvgIcon (
      "search",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/nav-icons/Search.svg")
    )
    this.matIconRegistry.addSvgIcon (
      "profile",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/nav-icons/Profile.svg")
    )
    this.matIconRegistry.addSvgIcon (
      "upload",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/nav-icons/Upload.svg")
    )
    this.matIconRegistry.addSvgIcon (
      "key",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/nav-icons/Key.svg")
    )
  }
}
