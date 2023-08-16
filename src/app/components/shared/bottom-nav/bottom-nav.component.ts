import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent {
  navItems = [
    {icon:"emoji_events", url:"/competition"},
    {icon:"shopping_bag", url:"/shop"},
    {icon:"search", url:"/discovery"},
    {icon:"group", url:"/user"},
    {icon:"favorite", url:"/favorite"},

  ]
}
