import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template:`
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all">All</option>
    <option value="inUse">In Use</option>
    <option value="low">Low</option>
  </select>
    <div *ngFor="let currentKeg of childKegList | lowness:selectedLow">
      <keg-display [keg]="currentKeg"></keg-display>
      <button (click)="editButtonClicked(currentKeg)">Edit</button>
    </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  public selectedLow: string = "all";
  onChange(optionFromMenu){
    this.selectedLow = optionFromMenu;
    console.log(this.selectedLow);
  }
  editButtonClicked(kegToEdit: Keg){
    this.clickSender.emit(kegToEdit);
  }
}
