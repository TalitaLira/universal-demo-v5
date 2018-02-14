import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MetaTagService {
  public Metas = new Subject<Object[]>();
  constructor() { 
 
  }

  AddingMetas(value){
    this.Metas.next(value);
  } 

}
