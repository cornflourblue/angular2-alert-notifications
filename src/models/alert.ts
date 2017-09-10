/**
 * Class that defines the properties of an alert.
 */
export class NgaAlert {
    /**
     * the type of the alert
     */
    type: NgaAlertType;
    /**
     * the message of the alert
     */
    message: string;
}

/**
 * Enum that defines the different types of alerts.
 */
export enum NgaAlertType {
    Success,
    Error,
    Info,
    Warning
}
