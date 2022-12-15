import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AnimationComponent } from './animation/animation.component';
import { CustomElementComponent } from './custom-element/custom-element.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { TableComponent } from './table/table.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'errorpage', component: ErrorpageComponent},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'users', component: UserComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: 'animation', component: AnimationComponent},
  { path:'custom',component:CustomElementComponent},
  { path: 'content', component: ContentProjectionComponent},
  { path:'table', component: TableComponent},
  { path:'dragDrop', component: DragDropComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
