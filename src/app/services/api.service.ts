import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Artist} from '../models/Artist.model';

const httpOptions = {
    headers: new HttpHeaders({
        'accept': 'application/json',
    })
};

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    apiURL = 'https://rest.bandsintown.com/artists/';

    constructor(private http: HttpClient) {

    }

    GetArtistInfo(artistName): Promise<Artist> {
        return new Promise((resolve, reject) => {
            let info = this.http.get(this.apiURL + artistName + '?app_id=sakibhasan', httpOptions).toPromise();
            let events = this.http.get(this.apiURL + artistName + '/events?app_id=sakibhasan', httpOptions).toPromise();
            Promise.all([info, events]).then(resp => {
                let artist = new Artist(resp[0], resp[1]);
                resolve(artist);
            }, error => {
                reject(error);
            });
        });
    }
}
