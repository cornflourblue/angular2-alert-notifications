import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { NgaAlertService } from 'ngx-alert-notifications';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private titleService:Title, private alertService: NgaAlertService) { }

  ngOnInit() {
    this.titleService.setTitle('Home | ngx-alert-notifications');
  }
  success(message: string) { 
      this.alertService.success(message);
  }

  error(message: string) {
      this.alertService.error(message);
  }

  info(message: string) {
      this.alertService.info(message);
  }

  warn(message: string) {
      this.alertService.warn(message);
  }

  clear() {
      this.alertService.clear();
  }
}
