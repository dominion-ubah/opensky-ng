import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    // private service: HeroService
    ) { }

  ngOnInit() {
  }

  goToMain() {
    this.router.navigate(['/main']);
  }

}
