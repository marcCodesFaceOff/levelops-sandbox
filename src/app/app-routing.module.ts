import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';

// Routes tell the Router which view to display when a user clicks a link or pastes a URL into the browser address bar.
const routes: Routes = [
// path:	A string that matches the URL in the browser address bar.
// component:	The component that the router should create when navigating to this route.
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'services', component: ServicesComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:rate', component: ServiceDetailComponent },
];

@NgModule({
  /* The forRoot() method supplies the service providers and directives needed for routing,
  and performs the initial navigation based on the current browser URL. */
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }