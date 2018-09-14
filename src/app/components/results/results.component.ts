import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

    constructor(private _ApiService: ApiService) {
    }

    ngOnInit() {
        this._ApiService.GetArtistInfo('Kygo').then(resp => {
            console.log(resp);
        }, error => {
            console.log(error);
        });
    }
}
