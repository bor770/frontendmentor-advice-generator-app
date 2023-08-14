import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { AdviceComponent } from './advice/advice.component';
import { DiceComponent } from './dice/dice.component';

@Component({
  imports: [CommonModule, AdviceComponent, DiceComponent],
  selector: 'app-root',
  standalone: true,
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {}
