import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {ProfileComponent} from "./profile/profile.component";
import {OrdersComponent} from "./orders/orders.component";
import {NeworderComponent} from "./neworder/neworder.component";
import { AuthActivateRouteGuard } from './routeguards/auth.routeguard';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent , canActivate:[AuthActivateRouteGuard]},
  { path: 'home', component: HomeComponent , canActivate: [AuthActivateRouteGuard]},
  { path: 'myProfile', component: ProfileComponent , canActivate: [AuthActivateRouteGuard]},
  { path: 'myOrders', component: OrdersComponent , canActivate: [AuthActivateRouteGuard]},
  { path: 'newOrder', component: NeworderComponent, canActivate:[AuthActivateRouteGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
