import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RepositoryModule } from './data/repository.module';
import { SomeModule } from './presenter/some/some.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RepositoryModule,
    SomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
