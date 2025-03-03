import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { PrimengModule } from '../../../../shared/modules/primeng/primeng.module';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss',
})
export class TimerComponent implements OnDestroy, OnInit {
  private countdownSubscription!: Subscription;
  totalTimeInSeconds = 300; // 5 minutes
  minutes!: number;
  seconds!: number;

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.updateTime();
    this.countdownSubscription = interval(1000).subscribe(() => {
      if (this.totalTimeInSeconds > 0) {
        this.totalTimeInSeconds--;
        this.updateTime();
      } else {
        this.onTimeUp();
      }
    });
  }

  updateTime() {
    this.minutes = Math.floor(this.totalTimeInSeconds / 60);
    this.seconds = this.totalTimeInSeconds % 60;
  }

  onTimeUp() {
    this.countdownSubscription.unsubscribe();
    // Trigger your function when time is up, e.g., OTP expired
  }

  resetTimer() {
    this.totalTimeInSeconds = 300; // Reset to 5 minutes
    if (this.countdownSubscription) {
      this.countdownSubscription.unsubscribe();
    }
    this.startTimer();
  }

  getSeverity(min: number): any {
    if (min > 3) {
      return '';
    } else if (min <= 3 && min > 1) {
      return 'warning';
    } else if (min <= 1) {
      return 'danger';
    }
    return '';
  }

  ngOnDestroy() {
    if (this.countdownSubscription) {
      this.countdownSubscription.unsubscribe();
    }
  }
}
