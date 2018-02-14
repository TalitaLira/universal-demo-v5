import { Movie } from './movie';
import { Component } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { MetaTagService } from './meta-tag.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  metasListener: any;
  constructor(
              private metaService: MetaTagService,
              private meta: Meta
            ){
    
    
  }

  ngOnInit(){
    
    this.metaService.Metas.subscribe(res => {
      this.metasListener = res;
      console.log("jijij" + this.metasListener);
      // Google
      this.meta.updateTag({name: 'description', content: this.metasListener[0].description });
      this.meta.updateTag({property: 'robots', content: 'all'});
      this.meta.updateTag({property: 'type', content: 'website'});
      // Facebook
      this.meta.updateTag({property: 'og:description', content: this.metasListener[0].description});
      this.meta.updateTag({property: 'og:title', content: this.metasListener[1].title});
      this.meta.updateTag({property: 'og:type', content: 'website'});
      this.meta.updateTag({property: 'og:image', content: this.metasListener[2].image});
      this.meta.updateTag({property: 'og:url', content: this.metasListener[3].url});
      this.meta.updateTag({property: 'og:site_name', content: 'FastShop'});
      // Twitter 
      this.meta.updateTag({property: 'twitter: description', content: this.metasListener[0].description});
      this.meta.updateTag({property: 'twitter: card', content: 'summary'});
      this.meta.updateTag({property: 'twitter: title', content: this.metasListener[1].title});
      this.meta.updateTag({property: 'twitter', content: 'website'});
      this.meta.updateTag({property: 'twitter: image', content: this.metasListener[2].image});
      this.meta.updateTag({property: 'twitter', content: this.metasListener[3].url});
      this.meta.updateTag({property: 'twitter: site', content: '@fast_shop'});
      
    });
    
    // console.log("Resultados meta: " + this.metasListener);
  }

  
}

