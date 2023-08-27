import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent {
  
  navItems = [
    {icon:"discovery", url:"/discovery"},
    {icon:"competition", url:"/competition"},
    {icon:"key", url:"/keys"},
    {icon:"profile", url:"/user"},
  ]
}
