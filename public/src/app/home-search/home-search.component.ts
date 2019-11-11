import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css']
})
export class HomeSearchComponent implements OnInit {

  searchString:string;

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }
  
  search() {
    this.router.navigate(['artist-results', this.searchString]);
  }
  
}