import {Component} from 'angular2/core';
import {Result} from '../searchResultClass';

@Component({
    selector: 'search-result',
    template: `
    <div class="col-sm-6 col-md-3">
      <div class="thumbnail">
        <img [src]="result.thumbnailUrl">
        <div class="caption">
          <h3>{{result.title}}</h3>
          <p>{{result.description}}</p>
          <p><a href="{{result.videoUrl}}"
                class="btn btn-default" role="button">Watch</a></p>
        </div>
      </div>
    </div>
    `,
    inputs: ['result']
    
})

export class SearchResult {
result: Result;
 }
