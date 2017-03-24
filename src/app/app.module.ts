import { CrisisCenterModule } from './crisis-center/crisis-center.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router } from "@angular/router";

import { HighlightDirective } from './core/highlight.directive';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './core/in-memory-data.service';


import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './shared/compose-message/compose-message.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HighlightDirective,
    PageNotFoundComponent,
    ComposeMessageComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    HeroesModule,
    CrisisCenterModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    //console.log('Routes:' , JSON.stringify(router.config, undefined, 2));
  }
 }
