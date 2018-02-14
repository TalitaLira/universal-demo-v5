import { MetaTagService } from './meta-tag.service';
import { HttpModule } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { Meta } from '@angular/platform-browser';
// import { SeoService } from './seo.service';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    HttpModule
  ],
  providers: [
    // ActivatedRoute
    HttpModule,
    // SeoService
    Meta,
    MetaTagService
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule { }