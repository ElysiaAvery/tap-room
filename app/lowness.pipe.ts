import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "lowness",
  pure: false
})
export class LownessPipe implements PipeTransform {
  transform(input: Keg[], desiredLowness) {
    var output: Keg[] = [];
    if(desiredLowness === "low") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].pints <= 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredLowness === "inUse") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].pints > 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
