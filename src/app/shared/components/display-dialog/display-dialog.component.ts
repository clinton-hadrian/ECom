import { Component, Input, input } from '@angular/core';
import { PrimengModule } from '../../modules/primeng/primeng.module';

@Component({
  selector: 'app-display-dialog',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './display-dialog.component.html',
  styleUrl: './display-dialog.component.scss',
})
export class DisplayDialogComponent {
  visible: boolean = false;
  header = input.required<string>();

  showDialog() {
    this.visible = true;
  }
}
