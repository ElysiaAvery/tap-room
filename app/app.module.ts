import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { NewKegComponent }   from './new-keg.component';
import { EditKegComponent } from './edit-keg.component';
import { KegListComponent } from './keg-list.component';
import { LownessPipe } from './lowness.pipe';
import { KegComponent } from './keg.component';



@NgModule({
  imports: [
    BrowserModule, FormsModule
  ],
  declarations: [
    AppComponent,
    NewKegComponent,
    EditKegComponent,
    KegListComponent,
    LownessPipe,
    KegComponent,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
