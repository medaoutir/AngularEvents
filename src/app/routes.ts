import {EventDetailsComponent} from './event-details/event-details.component';
import {EventsListComponent} from './events-list/events-list.component';
import {Routes} from '@angular/router';
import {CreateEventComponent} from './create-event/create-event.component';
import {ErrorsComponent} from './errors/errors.component';
import {CreateSessionComponent} from './create-session/create-session.component';
import { EventListResolverService } from './list-resolver/event-list-resolver.service';
import {EventDetailResolverService} from './detail-resolver/event-detail-resolver.service';


export const appRoutes:Routes=[
    {path:'events/new',component:CreateEventComponent,canDeactivate:['canDeactivateCreateEvent']},
    {path:'events/session/new',component:CreateSessionComponent},
    {path:'404', component:ErrorsComponent},
    {path:'events',component:EventsListComponent,resolve:{events:EventListResolverService}},
    {path:'events/:id',component:EventDetailsComponent,resolve:{event:EventDetailResolverService}},
    {path:'',redirectTo:'/events',pathMatch:'full'},
    {path:'user',loadChildren:'./user/user.module#UserModule'}
]