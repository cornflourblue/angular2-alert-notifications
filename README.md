<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/cornflourblue/ngx-alert-notifications/master/demo/src/assets/logo.svg">
</p>

# ngx-alert-notifications - Alert notifications module for Angular.

[![npm version](https://badge.fury.io/js/ngx-alert-notifications.svg)](https://badge.fury.io/js/ngx-alert-notifications)
[![Build Status](https://travis-ci.org/cornflourblue/ngx-alert-notifications.svg?branch=master)](https://travis-ci.org/cornflourblue/ngx-alert-notifications)
[![Coverage Status](https://coveralls.io/repos/github/cornflourblue/ngx-alert-notifications/badge.svg?branch=master)](https://coveralls.io/github/cornflourblue/ngx-alert-notifications?branch=master)
[![dependency Status](https://david-dm.org/cornflourblue/ngx-alert-notifications/status.svg)](https://david-dm.org/cornflourblue/ngx-alert-notifications)
[![devDependency Status](https://david-dm.org/cornflourblue/ngx-alert-notifications/dev-status.svg?branch=master)](https://david-dm.org/cornflourblue/ngx-alert-notifications#info=devDependencies)

## Demo

View all the directives in action at https://cornflourblue.github.io/ngx-alert-notifications

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `ngx-alert-notifications` via:
```shell
npm install --save ngx-alert-notifications
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `ngx-alert-notifications`:
```js
map: {
  'ngx-alert-notifications': 'node_modules/ngx-alert-notifications/bundles/ngx-alert-notifications.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { NgaAlertModule } from 'ngx-alert-notifications';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` NgaAlertModule.forRoot()`):
```js
import { NgaAlertModule } from 'ngx-alert-notifications';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [NgaAlertModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` NgaAlertModule `:

```js
import { NgaAlertModule } from 'ngx-alert-notifications';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [NgaAlertModule, ...], 
})
export class OtherModule {
}
```

## Usage

Once the module is imported, you can use the `NgaAlertService` in your component (i.e. `HomeComponent`) to display different types of notifications.

Here is how it works:

```ts
import { Component} from '@angular/core';
import { NgaAlertService } from 'ngx-alert-notifications';


@Component({
  selector: 'app-home',
  templateUrl: `./home.component.html'`,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

    constructor(private alertService: NgaAlertService) { }
 
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
```


and here, the related component template:

```html
  <div class="container">
	<div class="row">
		<div class="col-md text-center">
			<button class="btn btn-success" (click)="success('Success!!')"><i class="fa fa-bell" aria-hidden="true"></i> Success</button>
			<button class="btn btn-danger" (click)="error('Error :(')"><i class="fa fa-bell" aria-hidden="true"></i> Error</button>
			<button class="btn btn-info" (click)="info('Some info....')"><i class="fa fa-bell" aria-hidden="true"></i> Info</button>
			<button class="btn btn-warning" (click)="warn('Warning: ...')"><i class="fa fa-bell" aria-hidden="true"></i> Warn</button>
			<button class="btn btn-default" (click)="clear()"><i class="fa fa-bell-slash" aria-hidden="true"></i> Clear</button>
		</div>
		<div class="col-md text-center">
			<p class="text-muted">Your alerts will appear here...</p>				
			<nga-alert></nga-alert>
		</div>
		
	</div>
```


## License

Copyright (c) 2017 Jason Watmore. Licensed under the MIT License (MIT)

