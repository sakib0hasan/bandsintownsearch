import {TestBed, getTestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {ApiService} from './api.service';

describe('ApiService', () => {
    let injector: TestBed;
    let service: ApiService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ApiService]
        });
        injector = getTestBed();
        service = injector.get(ApiService);
        httpMock = injector.get(HttpTestingController);
    });
    describe('#getArtist', () => {
        it('should return an Promise<Artist>', () => {
            let dummyData = {
                'BasicInfo': {
                    'thumb_url': 'https://s3.amazonaws.com/bit-photos/thumb/7458155.jpeg',
                    'mbid': '',
                    'facebook_page_url': 'https://www.facebook.com/kygoofficial',
                    'image_url': 'https://s3.amazonaws.com/bit-photos/large/7458155.jpeg',
                    'name': 'Kygo',
                    'id': '6993460',
                    'tracker_count': 674955,
                    'upcoming_event_count': 40,
                    'url': 'https://www.bandsintown.com/a/6993460?came_from=267&app_id=sakibhasan'
                },
                'Events': [
                    {
                        'offers': [
                            {
                                'type': 'Tickets',
                                'url': 'https://www.bandsintown.com/t/100136181?app_id=sakibhasan&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket',
                                'status': 'available'
                            }
                        ],
                        'venue': {
                            'name': 'Kygo Kids In Love Tour - Auckland',
                            'country': 'New Zealand',
                            'region': '',
                            'city': 'Auckland',
                            'latitude': '-36.8484597',
                            'longitude': '174.7633315'
                        },
                        'datetime': '2018-10-17T18:00:00',
                        'on_sale_datetime': '2018-07-24T12:00:00',
                        'description': '',
                        'lineup': [
                            'Kygo'
                        ],
                        'id': '100136181',
                        'artist_id': '6993460',
                        'url': 'https://www.bandsintown.com/e/100136181?app_id=sakibhasan&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event'
                    },
                    {
                        'offers': [
                            {
                                'type': 'Tickets',
                                'url': 'https://www.bandsintown.com/t/100136195?app_id=sakibhasan&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket',
                                'status': 'available'
                            }
                        ],
                        'venue': {
                            'name': 'Kygo Kids In Love Tour - Sydney',
                            'country': 'Australia',
                            'region': '',
                            'city': 'Sydney',
                            'latitude': '-33.8688197',
                            'longitude': '151.2092955'
                        },
                        'datetime': '2018-10-19T18:00:00',
                        'on_sale_datetime': '2018-07-20T09:00:00',
                        'description': '',
                        'lineup': [
                            'Kygo'
                        ],
                        'id': '100136195',
                        'artist_id': '6993460',
                        'url': 'https://www.bandsintown.com/e/100136195?app_id=sakibhasan&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event'
                    },
                    {
                        'offers': [
                            {
                                'type': 'Tickets',
                                'url': 'https://www.bandsintown.com/t/100136297?app_id=sakibhasan&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket',
                                'status': 'available'
                            }
                        ],
                        'venue': {
                            'name': 'Kygo Kids In Love Tour - Melbourne',
                            'country': 'Australia',
                            'region': '',
                            'city': 'Melbourne',
                            'latitude': '-37.81361100000001',
                            'longitude': '144.963056'
                        },
                        'datetime': '2018-10-20T18:00:00',
                        'on_sale_datetime': '2018-07-20T09:00:00',
                        'description': '',
                        'lineup': [
                            'Kygo'
                        ],
                        'id': '100136297',
                        'artist_id': '6993460',
                        'url': 'https://www.bandsintown.com/e/100136297?app_id=sakibhasan&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event'
                    },
                    {
                        'offers': [
                            {
                                'type': 'Presale',
                                'url': 'https://www.bandsintown.com/t/100136368?app_id=sakibhasan&came_from=267&custom=true&utm_medium=api&utm_source=public_api&utm_campaign=ticket',
                                'status': 'available'
                            }
                        ],
                        'venue': {
                            'name': 'Kygo Kids In Love Tour - Bangkok',
                            'country': 'Thailand',
                            'region': '',
                            'city': 'Bangkok',
                            'latitude': '13.7563309',
                            'longitude': '100.5017651'
                        },
                        'datetime': '2018-10-22T18:30:00',
                        'on_sale_datetime': '2018-08-19T09:00:00',
                        'description': '',
                        'lineup': [
                            'Kygo'
                        ],
                        'id': '100136368',
                        'artist_id': '6993460',
                        'url': 'https://www.bandsintown.com/e/100136368?app_id=sakibhasan&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event'
                    },
                    {
                        'offers': [
                            {
                                'type': 'Tickets',
                                'url': 'https://www.bandsintown.com/t/100139536?app_id=sakibhasan&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket',
                                'status': 'available'
                            }
                        ],
                        'venue': {
                            'name': 'Kygo Kids In Love Tour - Manila',
                            'country': 'Philippines',
                            'region': '',
                            'city': 'Manila',
                            'latitude': '14.5995124',
                            'longitude': '120.9842195'
                        },
                        'datetime': '2018-10-25T19:00:00',
                        'on_sale_datetime': '',
                        'description': '',
                        'lineup': [
                            'Kygo'
                        ],
                        'id': '100139536',
                        'artist_id': '6993460',
                        'url': 'https://www.bandsintown.com/e/100139536?app_id=sakibhasan&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event'
                    },
                    {
                        'offers': [
                            {
                                'type': 'Presale',
                                'url': 'https://www.bandsintown.com/t/100129619?app_id=sakibhasan&came_from=267&custom=true&utm_medium=api&utm_source=public_api&utm_campaign=ticket',
                                'status': 'available'
                            }
                        ],
                        'venue': {
                            'name': 'Kygo Kids In Love Tour - Tokyo',
                            'country': 'Japan',
                            'region': 'Tōkyō-to',
                            'city': 'Shinjuku-ku',
                            'latitude': '35.6894875',
                            'longitude': '139.6917064'
                        },
                        'datetime': '2018-10-27T12:00:00',
                        'on_sale_datetime': '2018-07-17T12:00:00',
                        'description': '',
                        'lineup': [
                            'Kygo'
                        ],
                        'id': '100129619',
                        'artist_id': '6993460',
                        'url': 'https://www.bandsintown.com/e/100129619?app_id=sakibhasan&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event'
                    },
                    {
                        'offers': [],
                        'venue': {
                            'name': 'Kygo Kids In Love Tour - Seoul',
                            'country': 'South Korea',
                            'region': '',
                            'city': 'Seoul',
                            'latitude': '37.566535',
                            'longitude': '126.9779692'
                        },
                        'datetime': '2018-10-30T19:00:39',
                        'on_sale_datetime': '',
                        'description': '',
                        'lineup': [
                            'Kygo'
                        ],
                        'id': '100139543',
                        'artist_id': '6993460',
                        'url': 'https://www.bandsintown.com/e/100139543?app_id=sakibhasan&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event'
                    },
                    {
                        'offers': [],
                        'venue': {
                            'name': 'Kygo Kids In Love Tour - Jakarta',
                            'country': 'Indonesia',
                            'region': '',
                            'city': '',
                            'latitude': '-8.4095178',
                            'longitude': '115.188916'
                        },
                        'datetime': '2018-11-02T20:00:00',
                        'on_sale_datetime': '',
                        'description': '',
                        'lineup': [
                            'Kygo'
                        ],
                        'id': '100139547',
                        'artist_id': '6993460',
                        'url': 'https://www.bandsintown.com/e/100139547?app_id=sakibhasan&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event'
                    },
                    {
                        'offers': [
                            {
                                'type': 'Tickets',
                                'url': 'https://www.bandsintown.com/t/100140524?app_id=sakibhasan&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket',
                                'status': 'available'
                            }
                        ],
                        'venue': {
                            'name': 'Kygo @ Omnia Day Club - Bali',
                            'country': 'Indonesia',
                            'region': '',
                            'city': '',
                            'latitude': '-8.4095178',
                            'longitude': '115.188916'
                        },
                        'datetime': '2018-11-03T21:00:00',
                        'on_sale_datetime': '',
                        'description': '',
                        'lineup': [
                            'Kygo'
                        ],
                        'id': '100140524',
                        'artist_id': '6993460',
                        'url': 'https://www.bandsintown.com/e/100140524?app_id=sakibhasan&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event'
                    },
                    {
                        'offers': [
                            {
                                'type': 'Tickets',
                                'url': 'https://www.bandsintown.com/t/100139551?app_id=sakibhasan&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket',
                                'status': 'available'
                            }
                        ],
                        'venue': {
                            'name': 'Kygo Kids In Love Tour - Singapore',
                            'country': 'Singapore',
                            'region': '',
                            'city': 'Singapore',
                            'latitude': '1.3553794',
                            'longitude': '103.8677444'
                        },
                        'datetime': '2018-11-05T18:00:00',
                        'on_sale_datetime': '2018-07-23T10:00:00',
                        'description': '',
                        'lineup': [
                            'Kygo'
                        ],
                        'id': '100139551',
                        'artist_id': '6993460',
                        'url': 'https://www.bandsintown.com/e/100139551?app_id=sakibhasan&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event'
                    }
                ]
            };
            service.GetArtistInfo('kygo').then(resp => {
                expect(resp.BasicInfo.name).toEqual('Kygo');
            });
            const req = httpMock.expectOne('https://rest.bandsintown.com/artists/kygo?app_id=sakibhasan');
            expect(req.request.method).toBe('GET');
            req.flush(dummyData);
        });
    });
});

