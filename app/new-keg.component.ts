import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <h1>New Keg</h1>
    <div>
      <label>Enter a Name:</label>
      <input required type="text" #newName>
    </div>
    <div>
      <label>Enter a Brand:</label>
      <input required type="text" #newBrand>
    </div>
    <div>
      <label>Enter a Price:</label>
      <input required type="number" #newPrice>
    </div>
    <div>
      <label>Enter a Alcohol Content:</label>
      <input required type="number" #newAbv>
    </div>
    <button (click)="
      addClicked(newName.value, newBrand.value, newPrice.value, newAbv.value);
      newName.value='';
      newBrand.value='';
      newPrice.value='';
      newAbv.value='';
      ">Add</button>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();
  addClicked(name: string, brand: string, price: number, abv: number) {
    var newKeg: Keg = new Keg(name, brand, price, abv);
    this.newKegSender.emit(newKeg);
    console.log(newKeg);
  }
}
