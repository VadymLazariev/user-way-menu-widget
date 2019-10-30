import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { HeaderComponent } from './shared/components/header/header.component';
import {SharedModule} from '../shared/shared.module';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    MenuComponent,
    MenuItemComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class AccessibilityMenuModule { }
