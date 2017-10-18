import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ServicesComponent } from './services/services.component'
import { HomeComponent } from './home/home.component'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UsComponent } from './us/us.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'us',  component: UsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent}
];
