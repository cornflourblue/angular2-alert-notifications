import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { NgaAlert, NgaAlertType } from '../models';

/**
 *  Service to interact with the alert component (sending, clearing of alerts)
 */
@Injectable()
export class NgaAlertService {
    private subject = new Subject<NgaAlert>();
    private keepAfterRouteChange = false;

    constructor(private router: Router) {
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                } else {
                    // clear alert messages
                    this.clear();
                }
            }
        });
    }

    /**
     * Gets the current alert as an Observable.
     */
    getAlert(): Observable<any> {
        return this.subject.asObservable();
    }

    /**
     * Displays a success alert notification.
     * 
     * @param message the message to display
     * @param keepAfterRouteChange indicates if the alert should be kept after route changes (default `false`)
     */
    success(message: string, keepAfterRouteChange = false) {
        this.alert(NgaAlertType.Success, message, keepAfterRouteChange);
    }

    /**
     * Displays an error alert notification.
     * 
     * @param message the message to display
     * @param keepAfterRouteChange indicates if the alert should be kept after route changes (default `false`)
     */
    error(message: string, keepAfterRouteChange = false) {
        this.alert(NgaAlertType.Error, message, keepAfterRouteChange);
    }

    /**
     * Displays an info alert notification.
     * 
     * @param message the message to display
     * @param keepAfterRouteChange indicates if the alert should be kept after route changes (default `false`)
     */
    info(message: string, keepAfterRouteChange = false) {
        this.alert(NgaAlertType.Info, message, keepAfterRouteChange);
    }

    /**
     * Displays a warning alert notification.
     * 
     * @param message the message to display
     * @param keepAfterRouteChange indicates if the alert should be kept after route changes (default `false`)
     */
    warn(message: string, keepAfterRouteChange = false) {
        this.alert(NgaAlertType.Warning, message, keepAfterRouteChange);
    }

    /**
     * Displays an alert notification of the given type.
     * 
     * @param type the type of alert
     * @param message the message to display
     * @param keepAfterRouteChange indicates if the alert should be kept after route changes (default `false`)
     */
    alert(type: NgaAlertType, message: string, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next(<NgaAlert>{ type: type, message: message });
    }

    /**
     * Clears all alerts.
     */
    clear() {
        // clear alerts
        this.subject.next();
    }
}
