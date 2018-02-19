import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeasurementsComponent } from './measurements/measurements.component';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    MeasurementsComponent,
    ToolbarComponent,
    UpdatesComponent
  ],
  imports: [
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
    ChartsModule,
    MatStepperModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule {
}
