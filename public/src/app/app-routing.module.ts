import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistResultsComponent } from './artist-results/artist-results.component';
import { HomeSearchComponent } from './home-search/home-search.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'search' },
  { path: 'search', component: HomeSearchComponent },
  { path: 'artist-results/:id', component: ArtistResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }