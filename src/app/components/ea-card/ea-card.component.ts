import { Component, Input } from '@angular/core';

@Component({
  selector: 'ea-card',
  templateUrl: './ea-card.component.html',
  styleUrls: ['./ea-card.component.scss']
})
export class EaCardComponent {
  @Input() marker = 'none';
}
