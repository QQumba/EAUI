import { Component, Input } from '@angular/core';

@Component({
  selector: 'ea-divider',
  templateUrl: './ea-divider.component.html',
  styleUrls: ['./ea-divider.component.scss']
})
export class EaDividerComponent {
  @Input() shadow = false;
}
