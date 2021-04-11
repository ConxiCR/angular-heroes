import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/hero';
//Now the HeroDetailComponent is presenting the hero detail list instead of the HeroesComponent
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
