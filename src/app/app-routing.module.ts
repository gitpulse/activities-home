import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './shared/components/container/container.component';
import { HomeComponent } from './home/home.component';
import { ReleaseNotesComponent } from './release-notes/release-notes.component';

const routes: Routes = [
  { path: '',
    component: ContainerComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'release-notes', component: ReleaseNotesComponent },
    ],
  },
  { path: '', redirectTo: '/', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
  ],
})
export class AppRoutingModule { }
