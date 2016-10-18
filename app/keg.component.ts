import { Component, Input } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  template: `
  <div>
  <h2>Sell A Pint</h2>
    <label *ngIf="keg.price > 5" class="expensive">{{ keg.name }}</label>
    <label *ngIf="keg.price <= 5" class="cheapo">{{ keg.name }}</label>
    <br>
    <button (click)="
      sellPints()
      ">Sell Pint</button><br>
      <label>Pints Left: {{ keg.pints }}</label>
  </div>
  `
})
export class KegComponent {
  @Input() keg: Keg;
  sellPints() {
    this.keg.pints--;
  }
}
