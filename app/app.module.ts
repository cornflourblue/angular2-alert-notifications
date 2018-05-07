import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives/index';
import { AlertService } from './_services/index';
import { HomeComponent } from './home/index';
import { MultiAlertsComponent, MultiAlertsSectionComponent } from './multi-alerts/index';

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        MultiAlertsComponent,
        MultiAlertsSectionComponent
    ],
    providers: [
        AlertService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }