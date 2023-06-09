import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) { }

  goTohome() {
    this.router.navigate(['./home']);
  }
  goTodetails() {
    this.router.navigate(['./details']);
  }
  goTotemplate() {
    this.router.navigate(['./template']);
  }
}
