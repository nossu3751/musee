import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
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
  navItems = [
    {icon:"discovery", url:"/discovery"},
    {icon:"competition", url:"/competition"},
    {icon:"key", url:"/keys"},
    {icon:"profile", url:"/user"},
  ]
}
