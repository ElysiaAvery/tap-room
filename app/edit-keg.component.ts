import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
    <div *ngIf="childSelectedKeg">
      <h1>Edit Keg</h1>
      <div>
        <label>Enter Name:</label>
        <input [(ngModel)]="childSelectedKeg.name">
      </div>
      <div>
        <label>Enter Brand:</label>
        <input [(ngModel)]="childSelectedKeg.brand">
      </div>
      <div>
        <label>Enter Price:</label>
        <input type="number" [(ngModel)]="childSelectedKeg.price">
      </div>
      <div>
        <label>Enter Alcohol Content:</label>
        <input type="number" [(ngModel)]="childSelectedKeg.abv">
      </div>
      <div>
        <button (click)="doneClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
