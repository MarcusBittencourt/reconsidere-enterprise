import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeasurementsComponent } from './measurements/measurements.component';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule} from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UpdatesComponent } from './updates/updates.component';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import { ChartsModule } from 'ng2-charts';
import { StartcenterComponent } from './startcenter/startcenter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { ROUTING } from './app.routing';
import { APP_BASE_HREF } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import { FooterComponent } from './footer/footer.component';
import { ProdutionWidgetComponent } from './dashboard/prodution.widget.component';
import { ContaminationWidgetComponent } from './dashboard/contamination.widget.component';
import { PreselectionWidgetComponent } from './dashboard/preselection.widget.component';
import { NextcollectionWidgetComponent } from './dashboard/nextcollection.widget.component';
import { CultureWidgetComponent } from './dashboard/culture.widget.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminComponent } from './admin/admin.component';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AuthComponent } from './auth/auth.component';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "AIzaSyAXr6Yyl5EL3p5yq3xtGyqaVby2S-xR-oc",
  authDomain: "angular4curso-f4cfd.firebaseapp.com",
  databaseURL: "https://angular4curso-f4cfd.firebaseio.com",
  storageBucket: "angular4curso-f4cfd.appspot.com",
  messagingSenderId: "550238714175"
};

@NgModule({
  declarations: [
    AppComponent,
    MeasurementsComponent,
    ToolbarComponent,
    UpdatesComponent,
    StartcenterComponent,
    ProfileComponent,
    DashboardComponent,
    FooterComponent,
    ProdutionWidgetComponent,
    ContaminationWidgetComponent,
    NextcollectionWidgetComponent,
    PreselectionWidgetComponent,
    CultureWidgetComponent,
    AdminComponent,
    AuthComponent
  ],
  imports: [
    MatSidenavModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatSliderModule,
    FormsModule,
    MatToolbarModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    AngularFireAuthModule,
    AngularFireModule,
    MatTooltipModule,
    MatMenuModule,
    MatTabsModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatRadioModule,
    ChartsModule,
    MatFormFieldModule,
    MatStepperModule,
    MatTableModule,
    ProdutionWidgetComponent,
    ContaminationWidgetComponent,
    NextcollectionWidgetComponent,
    PreselectionWidgetComponent,
    CultureWidgetComponent,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),

    NgbModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireAuthModule,
    ROUTING
  ],
  providers: [AngularFireDatabase, {provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
