import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { PanelMenuComponent } from '../components/panel-menu/panel-menu.component';

@Component({
  selector: 'ecom-home-layout',
  imports: [RouterModule, HeaderComponent, PanelMenuComponent],
  standalone: true,
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss',
})
export class HomeLayoutComponent {}
