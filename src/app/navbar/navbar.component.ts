import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  constructor() { }
  ngOnInit() {
    let prevScrollPos = window.pageYOffset;
    const myElement:HTMLElement | null = document.getElementById("navbar");
    window.onscroll = function() {
      let currentScrollPos = window.pageYOffset;
      if (myElement) {
        myElement.style.top = (prevScrollPos > currentScrollPos)
          ? "0"
          : "-5rem";
      }
      prevScrollPos = currentScrollPos;
    }
  }
}
