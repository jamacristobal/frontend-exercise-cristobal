import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './interceptor/HttpErrorInterceptor';
import { EmployeeListComponent } from './modules/employee/containers/employee-list/employee-list.component';
import { EmployeeServiceService } from './service/employee-service.service';
import { MdbModule } from 'mdb-angular-ui-kit';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EmpListComponent } from './modules/employee/components/emp-list/emp-list.component';
import { EmpFormComponent } from './modules/employee/components/emp-form/emp-form.component';
import { CompModalComponent } from './modules/common/comp-modal/comp-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmpListComponent,
    EmpFormComponent,
    CompModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MdbModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HttpErrorInterceptor,
    //   multi: true,
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
