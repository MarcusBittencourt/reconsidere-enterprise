import { MeasurementsComponent } from './measurements/measurements.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { ProfileComponent } from './profile/profile.component';
import { StartcenterComponent } from './startcenter/startcenter.component';
import { UpdatesComponent } from './updates/updates.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import { SignInComponent } from "./sign-in/sign-in.component";

export const routes: Routes = [
  { path: '', component: SignUpComponent },
  {path: 'signIn', component: SignInComponent},
  { path: 'startcenter', component: StartcenterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'dasboards', component: DashboardComponent },
  { path: 'measurements', component: MeasurementsComponent },
  { path: 'updates', component: UpdatesComponent },
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(routes);
