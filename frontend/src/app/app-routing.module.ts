import { JobpostUiComponent } from './jobpost/jobpost-ui/jobpost-ui.component';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';

import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const router: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'jobpost', component: JobpostUiComponent }
  // { path: 'jobpost', children: [
  //   { path: 'add', component: JobPostComponent }
  // ]}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
