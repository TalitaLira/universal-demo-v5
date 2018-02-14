import { MetaTagService } from './meta-tag.service';
import { HttpModule } from '@angular/http';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TesteMetaComponent } from './teste-meta/teste-meta.component';
import { DetailComponent } from './detail/detail.component';
import { HttpClientModule } from '@angular/common/http';
import { Meta } from '@angular/platform-browser';
// import { SeoService } from './seo.service';


@NgModule({
  declarations: [
    AppComponent,
    TesteMetaComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'universal-demo-v5' }),
    RouterModule.forRoot([{ path: ':id', component: DetailComponent }]),
    HttpClientModule,
    BrowserTransferStateModule,
    HttpModule
  ],
  providers: [
    RouterModule,
    // SeoService,s
    HttpModule,
    Meta,
    MetaTagService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
