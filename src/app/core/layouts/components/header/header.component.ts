import { Component, OnInit } from '@angular/core';
import { PrimengModule } from '../../../../shared/modules/primeng/primeng.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PrimengModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  items!: any[];
  ngOnInit() {
    // this.items = [
    //   {
    //     label: 'Home',
    //     icon: 'pi pi-home',
    //   },
    //   {
    //     label: 'Features',
    //     icon: 'pi pi-star',
    //   },
    //   {
    //     label: 'Projects',
    //     icon: 'pi pi-search',
    //     items: [
    //       {
    //         label: 'Core',
    //         icon: 'pi pi-bolt',
    //         shortcut: '⌘+S',
    //       },
    //       {
    //         label: 'Blocks',
    //         icon: 'pi pi-server',
    //         shortcut: '⌘+B',
    //       },
    //       {
    //         label: 'UI Kit',
    //         icon: 'pi pi-pencil',
    //         shortcut: '⌘+U',
    //       },
    //       {
    //         separator: true,
    //       },
    //       {
    //         label: 'Templates',
    //         icon: 'pi pi-palette',
    //         items: [
    //           {
    //             label: 'Apollo',
    //             icon: 'pi pi-palette',
    //             badge: '2',
    //           },
    //           {
    //             label: 'Ultima',
    //             icon: 'pi pi-palette',
    //             badge: '3',
    //           },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     label: 'Contact',
    //     icon: 'pi pi-envelope',
    //     badge: '3',
    //   },
    // ];
  }
}
