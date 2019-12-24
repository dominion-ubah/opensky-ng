import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginForm;
  errors

  constructor(private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    ) { 
      this.loginForm = this.formBuilder.group({
        user: '',
        password: ''
      });
    }

  ngOnInit() {
  }

  onSubmit(userData) {
    // Process checkout data here
    console.warn('Your order has been submitted', userData);
    if(userData.user === 'demo' && userData.password === 'demo') {
      this.loginForm.reset();
      this.goToMain()
    } else {
       this.errors = "Please ensure your login credentials are correct"
    }
  }

  goToMain() {
    this.router.navigate(['/main']);
  }


}
