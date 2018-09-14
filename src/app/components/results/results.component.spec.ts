import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ResultsComponent} from './results.component';
import {ContentLoaderModule} from '@netbasal/content-loader';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

describe('ResultsComponent', () => {
    let component: ResultsComponent;
    let fixture: ComponentFixture<ResultsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ResultsComponent],
            imports: [FormsModule,
                ContentLoaderModule,
                HttpClientModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ResultsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
