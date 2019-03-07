import { SearchComponent } from './jobpost/jobpost-ui/search/search.component';
import { AddComponent } from './jobpost/jobpost-ui/add/add.component';
import { ListComponent } from './jobpost/jobpost-ui/list/list.component';
import { JobpostUiComponent } from './jobpost/jobpost-ui/jobpost-ui.component';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app-routing.module';


@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      JobpostUiComponent,
      ListComponent,
      AddComponent,
      SearchComponent
   ],
   imports: [
      FontAwesomeModule,
      BrowserAnimationsModule,
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule,
      BrowserModule,
      routes
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
