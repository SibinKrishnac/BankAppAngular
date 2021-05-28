import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
}) 
export class LoginComponent implements OnInit {
  Aim="Your perfect Banking Partner"
  accno="Account Number Please"
  constructor() { }

  ngOnInit(): void {
  }

}
