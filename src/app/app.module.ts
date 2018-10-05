import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventService } from './shared/event.service';
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { JQ_TOKEN } from './common/j-query.service';
import { AuthService } from './shared/auth.service';
import { EventDetailsComponent } from './event-details/event-details.component';
import { appRoutes } from './routes'
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './create-event/create-event.component';
import { ErrorsComponent } from './errors/errors.component';
import { CreateSessionComponent } from './create-session/create-session.component';
import { SessionListComponent } from './session-list/session-list.component';
import { CollapsibleWellComponent } from './collapsible-well/collapsible-well.component';
import { DurationPipe } from './shared/duration.pipe';
import { SimpleModalComponent } from './simple-modal/simple-modal.component';
import { ModaltriggerDirective } from './common/modaltrigger.directive';
import { VoteUpComponent } from './vote-up/vote-up.component';
import { VoterService } from './session-list/voter.service';
import { LocationValidatorDirective } from './shared/location-validator.directive';

declare let toastr: Toastr
declare let jQuery: Object

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    ErrorsComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModaltriggerDirective,
    VoteUpComponent,
    LocationValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService,
    { provide: TOASTR_TOKEN, useValue: toastr }
    , { provide: JQ_TOKEN, useValue: jQuery }
    , AuthService
    , VoterService
    , { provide: 'canDeactivateCreateEvent', useValue: checkDirtyValue }],
  bootstrap: [AppComponent]
})
export class AppModule {
}

function checkDirtyValue(component: CreateEventComponent): boolean {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true
}
