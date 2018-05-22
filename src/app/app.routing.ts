import { MeasurementsComponent } from './measurements/measurements.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { ProfileComponent } from './profile/profile.component';
import { StartcenterComponent } from './startcenter/startcenter.component';
import { UpdatesComponent } from './updates/updates.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuard } from '../guards/auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';

export const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'startcenter', component: StartcenterComponent, canActivate: [AuthGuard]},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'dashboards', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'measurements', component: MeasurementsComponent, canActivate: [AuthGuard] },
  { path: 'updates', component: UpdatesComponent, canActivate: [AuthGuard] },
  { path: 'forgotpass', component: ForgotpassComponent, canActivate: [AuthGuard] },
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(routes);
