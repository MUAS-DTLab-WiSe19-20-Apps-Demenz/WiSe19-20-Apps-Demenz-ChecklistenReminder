import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChecklistOverviewComponent } from './checklist/checklist-overview.component';
import { ReminderComponent } from './reminder/reminder.component';
import { ReminderComponentComponent } from './reminder-component/reminder-component.component';
import { DetailComponent } from './components/reminder/detail/detail.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { ChecklistEntryComponent } from './checklist-entry/checklist-entry.component';
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
  { path: 'Erinnerungen', component: ReminderComponent },
  { path: 'Erinnerungen/Detail/:id', component: DetailComponent },
  { path: 'Checklisten', component: ChecklistOverviewComponent },
  // { path: 'Notfallkontakte', component: EmergencyContactsComponent },
  { path: 'MainMenu', component: MainMenuComponent},
  { path: '', redirectTo: 'MainMenu', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    PageNotFoundComponent,
    ChecklistOverviewComponent,
    PageNotFoundComponent,
    ReminderComponent,
    ReminderComponentComponent,
    DetailComponent,
    ChecklistComponent,
    ChecklistEntryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
