import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { ContentComponent } from './components/content/content.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { Ejemplo1Component } from './components/sidebar-content/ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './components/sidebar-content/ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './components/sidebar-content/ejemplo3/ejemplo3.component';
import { Ejemplo4Component } from './components/sidebar-content/ejemplo4/ejemplo4.component';
import { Ejemplo5Component } from './components/sidebar-content/ejemplo5/ejemplo5.component';
import { Ejemplo6Component } from './components/sidebar-content/ejemplo6/ejemplo6.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    ContentComponent,
    SidebarComponent,
    Ejemplo1Component,
    Ejemplo2Component,
    Ejemplo3Component,
    Ejemplo4Component,
    Ejemplo5Component,
    Ejemplo6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
