
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Meta } from '@angular/platform-browser';
import { Movie } from '../movie';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';
// import { SeoService } from '../seo.service';
import { MetaTagService } from '../meta-tag.service';
import { Router } from '@angular/router';

const MOVIE_KEY = makeStateKey('movie'); 
// const TESTE_KEY = makeStateKey('teste'); 

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
public movie: any;
public id;
public title;
public bla = "ksmksm";
private isServer: boolean;
public result;
public localUrl;
// public teste: String;
  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private meta: Meta,
              private state: TransferState,
              @Inject(PLATFORM_ID) platformId,
              // private seoService : SeoService,
              private metaService : MetaTagService,
              private router: Router
            ) 
{
  this.isServer = isPlatformServer(platformId); 
  
}    

  ngOnInit() {

    // this.meta.addTags()

    this.localUrl = this.router.url;
    this.movie = this.state.get(MOVIE_KEY, null as any);

    console.log(this.localUrl);
   
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      
      console.log("id " + this.id);
       
   });

   this.getMovie(this.id).subscribe(res => {
    this.movie = res;
    let metaObj = [
      {'description': this.movie['overview']}, 
      {'title': this.movie['title']}, 
      {'image': 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/'+ this.movie['poster_path']},
      {'url': this.localUrl}
    ]
    this.setMeta(metaObj);
    this.state.set(MOVIE_KEY, res as any);
  });

  

  // console.log("titulo" + this.movie['title'])
  // console.log("titulo: " + this.movie.title);


//   if (this.state.hasKey(TESTE_KEY)) {
//     // We are in the browser
//     this.teste = this.state.get(TESTE_KEY, '');
// } else {
//     // No teste received (browser)
//     this.teste = 'Im created in the browser!';
// }

// this.state.onSerialize(TESTE_KEY, () => {
//     // On the server
//     return 'Im created on the server!';
// });

// console.log("Esta sendo gerado no: " + this.result);
  // this.meta.updateTag(
  //   {name:'twitter: card', content: this.movie.title },    
    
  // );
}

setMeta(obj){
  this.metaService.AddingMetas(obj);
}

  getMovie(id) {
    return this.http.get("https://api.themoviedb.org/3/movie/" + id + "?api_key=d1116d6ec493b1a0a180883c4bc6b144")
    .map(result => {
      return result ;
    })
      
  }

}
