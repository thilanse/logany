import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideContentComponent } from './components/side-content/side-content.component';
import { ShoppingListsComponent } from './components/shopping-lists/shopping-lists.component';
import { SideInfoComponent } from './components/side-info/side-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SideContentComponent,
    routingComponents,
    ShoppingListsComponent,
    SideInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TextareaAutosizeModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
