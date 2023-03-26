import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { RemoveSpacesPipe } from './remove-spaces.pipe';
import { InputFormatDirective } from './input-format.directive';
import { InputFormatPipe } from './input-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    RemoveSpacesPipe,
    InputFormatDirective,
    InputFormatPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }