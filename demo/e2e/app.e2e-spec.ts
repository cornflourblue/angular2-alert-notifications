import { NgxAlertNotificationsDemoPage } from './app.po';

describe('ngx-alert-notifications-demo App', () => {
  let page: NgxAlertNotificationsDemoPage;

  beforeEach(() => {
    page = new NgxAlertNotificationsDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
