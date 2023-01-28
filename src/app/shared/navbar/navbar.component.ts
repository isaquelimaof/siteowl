import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  myFunction() {
    const x = document.getElementById("myTopnav")
    if (x?.className === "topnav") {
      x.classList.toggle("responsive")
    } else {
      x?.classList.toggle("responsive")
    }

  }
}



