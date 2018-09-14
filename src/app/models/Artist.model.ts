export class Artist {
    BasicInfo: BasicInfo;
    Events: Array<Event>;

    constructor(b: any, e: any) {
        this.BasicInfo = b;
        this.Events = e;
    }
}

export interface BasicInfo {
    facebook_page_url: string,
    id: string,
    image_url: string,
    mbid: string,
    name: string,
    thumb_url: string,
    tracker_count: number,
    upcoming_event_count: number
}

export interface Event {
    artist_id?: string,
    datetime?: string,
    description?: string,
    id?: string,
    lineup?: string[],
    on_sale_datetime?: string,
    url?: string,
    venue?: Venue
}

export interface Venue {
    city: string,
    country: string,
    latitude: string,
    longitude: string,
    name: string,
    region: string
}

