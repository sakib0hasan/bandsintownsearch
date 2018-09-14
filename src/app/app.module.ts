import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SearchComponent} from './components/search/search.component';
import {FormsModule} from '@angular/forms';
import {ResultsComponent} from './components/results/results.component';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './services/api.service';
import {ContentLoaderModule} from '@netbasal/content-loader';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        ResultsComponent
    ],
    imports: [
        BrowserModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
        FlexLayoutModule,
        FormsModule,
        HttpClientModule,
        ContentLoaderModule,
        BrowserAnimationsModule
    ],
    providers: [ApiService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
