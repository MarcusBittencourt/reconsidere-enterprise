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
import {AuthComponent} from './auth/auth.component';

export const routes: Routes = [
  { path: '', component: StartcenterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'dasboards', component: DashboardComponent },
  { path: 'measurements', component: MeasurementsComponent },
  { path: 'updates', component: UpdatesComponent },
  { path: 'auth', component: AuthComponent},

];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(routes);
