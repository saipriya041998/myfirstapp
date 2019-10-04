import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { ArrdemoComponent } from './arrdemo/arrdemo.component';
import { HighlighterDirective } from './highlighter.directive';
import { CardDirective } from './card.directive';
import { FilterPipe } from './filter.pipe';
import { MenuComponent } from './menu/menu.component';
import { routing } from "./app.routing";
import { PathnotfoundComponent } from './pathnotfound/pathnotfound.component';
@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    ArrdemoComponent,
    HighlighterDirective,
    CardDirective,
    FilterPipe,
    MenuComponent,
    PathnotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
