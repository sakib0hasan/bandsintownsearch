import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    keyword: string = '';

    constructor(private _ApiService: ApiService) {
    }

    ngOnInit() {
    }

    keyDownFunction(event) {
        if (event.keyCode === 13 && this.keyword.length > 0) {
            this._ApiService.changeKeyword(this.keyword);
        }
    }
}
