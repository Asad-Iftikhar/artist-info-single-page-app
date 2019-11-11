import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-artist-results',
  templateUrl: './artist-results.component.html',
  styleUrls: ['./artist-results.component.css']
})
export class ArtistResultsComponent implements OnInit {

  searchString:string;

  constructor(
    private route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.searchString = this.route.snapshot.paramMap.get('id');
  }

  search() {
    this.router.navigate(['artist-results', this.searchString]);
  }

}
