import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HierarchyViewComponent } from './hierarchy-view/hierarchy-view.component';

const routes: Routes = [{
  path: 'hierarchy',
  component: HierarchyViewComponent,
},
{
  path: '',
  redirectTo: 'hierarchy',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
