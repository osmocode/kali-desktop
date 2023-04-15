import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// NG-ZORRO-ANTD
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';


@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,

        AppRoutingModule,

        NzIconModule,
        NzButtonModule,
        NzLayoutModule,
        NzMenuModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
