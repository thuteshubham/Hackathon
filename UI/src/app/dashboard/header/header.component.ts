import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { Router, Route } from '@angular/router';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isAdmin: boolean = JSON.parse(Cookie.get('IS_ADMIN'));
  constructor(private router: Router) {

  }



  ngOnInit() {
  }
  signOff() {
    Cookie.delete('AuthToken');
    Cookie.delete('userId');
    this.router.navigate(['/login']);
  }
}
