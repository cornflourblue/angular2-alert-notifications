import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgaAlertComponent } from './components/index';
import { NgaAlertService } from './services/index';


export { NgaAlertComponent } from './components/index';
export { NgaAlertService } from './services/index';
export { NgaAlert, NgaAlertType } from './models/index';


/**
 * Main module of the library
 */
@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [NgaAlertComponent],
    exports: [NgaAlertComponent]
})
export class NgaAlertModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgaAlertModule,
            providers: [NgaAlertService]
        };
    }
}
