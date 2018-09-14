import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {SearchComponent} from './components/search/search.component';
import {ResultsComponent} from './components/results/results.component';
import {FormsModule} from '@angular/forms';
import {ContentLoaderModule} from '@netbasal/content-loader';
import {HttpClientModule} from '@angular/common/http';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                SearchComponent,
                ResultsComponent
            ],
            imports: [
                FormsModule,
                ContentLoaderModule,
                HttpClientModule
            ]
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it(`should have as title 'bandsintownsearch'`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('bandsintownsearch');
    }));
    it('should render title in a h1 tag', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Search your favourite artist!');
    }));
});
