import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  // { path: 'Erinnerungen', component: ReminderComponent },
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
    PageNotFoundComponent
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
