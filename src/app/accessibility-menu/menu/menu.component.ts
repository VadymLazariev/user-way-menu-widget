import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  menuItems: MenuItem[] = [
    { title: 'Keyboard Nav', icon: './assets/icons/keyboard-nav.svg'},
    { title: 'Read Page', icon: './assets/icons/read-page.svg'},
    { title: 'Contrast +', icon: './assets/icons/contrasts.svg'},
    { title: 'Stop Animations', icon: './assets/icons/animation.svg'},
    { title: 'Bigger Text', icon: './assets/icons/bigger-text.svg'},
    { title: 'Legible Fonts', icon: './assets/icons/legible-fonts.svg'},
    { title: 'Big Cursor', icon: './assets/icons/big-cursor.svg'},
    { title: 'Tooltips', icon: './assets/icons/tooltip.svg'},
    { title: 'Highlight Links', icon: './assets/icons/highlight-links.svg'},
    { title: 'Page Structure', icon: './assets/icons/tooltip.svg'},
    ];

  ngOnInit() {
  }

}
