import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'bikymandal';

  constructor(
    private router: Router,
  ){}

  ngOnInit(): void {
    if(!sessionStorage.getItem('visit')){
      this.router.navigate(['/welcome'])
    }
  }
}
