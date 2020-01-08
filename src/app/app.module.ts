import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReminderComponent } from './reminder/reminder.component';
import { ReminderComponentComponent } from './reminder-component/reminder-component.component';
import { DetailComponent } from './components/reminder/detail/detail.component';

const appRoutes: Routes = [
  { path: 'Erinnerungen', component: ReminderComponent },
  { path: 'Erinnerungen/Detail/:id', component: DetailComponent },
  // { path: 'Checklisten', component: ChecklistComponent },
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
    ReminderComponent,
    ReminderComponentComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
