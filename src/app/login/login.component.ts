import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../data/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {
    name: '',
    psw: ''
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submit(): void {
    console.log('user', this.user);
    this.router.navigate(['/container/dashboard']);
  }

}
