import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public error: string;
  public registerCredentials: any;
  public isLoading = false;
  public displayLoader = false;
  public indicatorCount: number;

  constructor(private router: Router) {}

  ngOnInit() {
    this.registerCredentials = {
      username: '',
      password: '',
    };
  }

  logintoApp() {
    this.router.navigate(['feed']);
  }
}
