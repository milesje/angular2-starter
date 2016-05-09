import { Component }       from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
  selector: 'my-app',
  templateUrl: 'app/html/app.component.html',
  styleUrls: ['app/css/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
      ROUTER_PROVIDERS,
  ]
})
@RouteConfig([
    //{
    //    path: '/dashboard',
    //    name: 'Dashboard',
    //    component: DashboardComponent,
    //    useAsDefault: true
    //}
])
export class AppComponent {
  title = 'MY COOL TITLE';
}