import { Component, OnInit } from '@angular/core';

import { NgaAlert, NgaAlertType } from '../models';
import { NgaAlertService } from '../services';

/**
 * Main component to display the alert notifications.
 */
@Component({
    selector: 'nga-alert',
    templateUrl: 'alert.component.html'
})
export class NgaAlertComponent implements OnInit {
    alerts: NgaAlert[] = [];

    constructor(private alertService: NgaAlertService) { }

    ngOnInit() {
        this.alertService.getAlert().subscribe((alert: NgaAlert) => {
            if (!alert) {
                // clear alerts when an empty alert is received
                this.alerts = [];
                return;
            }

            // add alert to array
            this.alerts.push(alert);
        });
    }

    /**
     * Removes the given alert.
     * 
     * @param alert the alert to remove
     */
    removeAlert(alert: NgaAlert) {
        this.alerts = this.alerts.filter(x => x !== alert);
    }

    /**
     * Retrieves css classes corresponding to the given alert.
     * 
     * @param alert the alert 
     * @returns the css classes corresponding to the type of alert
     */
    cssClass(alert: NgaAlert) {
        if (!alert) {
            return;
        }

        // return css class based on alert type
        switch (alert.type) {
            case NgaAlertType.Success:
                return 'alert alert-success';
            case NgaAlertType.Error:
                return 'alert alert-danger';
            case NgaAlertType.Info:
                return 'alert alert-info';
            case NgaAlertType.Warning:
                return 'alert alert-warning';
        }
    }
}
