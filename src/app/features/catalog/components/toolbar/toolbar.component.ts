import { Component, OnInit } from '@angular/core';
import { PrimengModule } from '../../../../shared/modules/primeng/primeng.module';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent implements OnInit {
  items!: any[];

  ngOnInit() {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh',
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
      },
    ];
  }
}
