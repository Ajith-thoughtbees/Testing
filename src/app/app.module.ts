import { NgModule,CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AnimationComponent } from './animation/animation.component';
import { CustomElementComponent } from './custom-element/custom-element.component';
import { createCustomElement } from '@angular/elements';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { TableComponent } from './table/table.component';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import {DragDropModule} from 'primeng/dragdrop';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    UserComponent,
    LoginComponent,
    DashboardComponent,
    ErrorpageComponent,
    ParentComponent,
    ChildComponent,
    AnimationComponent,
    ContentProjectionComponent,
    TableComponent,
    DragDropComponent,
    // CustomElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CustomElementComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

  constructor(private injector: Injector) {
    const customElement = createCustomElement(CustomElementComponent, { injector:this.injector});
    customElements.define('custom-element', customElement);
}
}

