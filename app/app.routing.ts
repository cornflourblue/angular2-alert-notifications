import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { MultiAlertsComponent } from './multi-alerts/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'multi-alerts', component: MultiAlertsComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);