import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-other-exp-card',
  templateUrl: './other-exp-card.component.html',
  styleUrls: ['./other-exp-card.component.scss']
})
export class OtherExpCardComponent {
  @Input() data: any;
}
