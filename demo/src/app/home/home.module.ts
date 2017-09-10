import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgaAlertModule } from 'ngx-alert-notifications';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        NgaAlertModule.forRoot()
    ],
    declarations: [HomeComponent],
})
export class HomeModule { }
