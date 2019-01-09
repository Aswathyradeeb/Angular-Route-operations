import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './task/task.component';
import { UserListComponent } from './user/user-list.component';
import { UserViewComponent } from './user/user-view.component';
const routes: Routes = [
  { 
    path:'user',
    component:UserComponent,
    children:[
      { path:'ulist',component:UserListComponent},
      { path:'uview',component:UserViewComponent},
    ]
  },
  { path:'task',component:TaskComponent},
 
 
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    TaskComponent,
    UserListComponent,
    UserViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)],
   
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
