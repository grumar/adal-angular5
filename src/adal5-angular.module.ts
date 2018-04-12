import { Adal5Interceptor } from './adal5-interceptor';
import { Adal5User } from './adal5-user';
import { Adal5Service } from './adal5.service';
import { Adal5HTTPService } from './adal5-http.service';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
    imports: [
    ],
    exports: [
        Adal5User, Adal5Service, Adal5HTTPService, Adal5Interceptor
    ],
    providers: [,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: Adal5Interceptor,
            multi: true
        },
    ],
})
export class Adal5AngularModule { }